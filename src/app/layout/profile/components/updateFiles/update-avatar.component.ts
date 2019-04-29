import { Component, OnInit } from '@angular/core';
import {SessionsService} from "../../../../shared/services";
import {ConfirmationService, MessageService} from "primeng/api";
import {forEach} from "@angular/router/src/utils/collection";

@Component({
    selector: 'app-update-avatar',
    templateUrl: './update-avatar.component.html',
    styleUrls: ['./update-avatar.component.scss'],
    providers: [ConfirmationService]
})
export class UpdateAvatarComponent implements OnInit {
    selectFile: File = null;
    mesagge: any;
    getAllImage: any;
    imageAvatar:any;
    imageLogo:any;
    documentIdentity:any;
    showIdentity:any;
    documentNIt:any;
    showNIt:any;
    documentRut:any;
    showRut:any;
    documentCCommerce:any;
    showCCommerce:any;
    idFileAvatar:any;
    idFileLogo:any;
    idFileIdentity:any;
    idFileNit:any;
    idFileRut:any;
    idFileCComerce:any;

    constructor(
        private session_service: SessionsService,
        private messageService: MessageService,
        private confirmationService: ConfirmationService
    ) {}

    ngOnInit() {
        this.getFileAndShow();
    }

    confirm1(id) {
        this.confirmationService.confirm({
            message: 'Esta seguro de borrar el archivo',
            header: 'Confirmacion',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.deleteFile(id);
            },
            reject: () => {
                this.messageService.add({severity:'warn', summary: 'Notificacion', detail:'El archivo no fue borrado'});
            }
        });
    }



    getFileAndShow() {
        this.session_service.getAllFiles().subscribe(
            result => {
                this.getAllImage = result;
                console.log(this.getAllImage);
                for (var i = 0; i < this.getAllImage.length; i++) {
                    if (this.getAllImage[i].document_id == 1) {
                        this.imageAvatar = this.getAllImage[i].path + '300X200_' + this.getAllImage[i].name;
                        this.idFileAvatar= this.getAllImage[i].document_id;
                    }
                    if (this.getAllImage[i].document_id == 2) {
                        this.imageLogo = this.getAllImage[i].path + '300X200_' + this.getAllImage[i].name;
                        this.idFileLogo= this.getAllImage[i].document_id;
                    }
                    if (this.getAllImage[i].document_id == 4) {
                        this.documentIdentity = this.getAllImage[i].path+ this.getAllImage[i].name;
                        this.showIdentity = this.getAllImage[i].show_document;
                        this.idFileIdentity= this.getAllImage[i].document_id;
                    }
                    if (this.getAllImage[i].document_id == 5) {
                        this.documentNIt = this.getAllImage[i].path+ this.getAllImage[i].name;
                        this.showNIt = this.getAllImage[i].show_document;
                        this.idFileNit= this.getAllImage[i].document_id;
                    }
                    if (this.getAllImage[i].document_id == 6) {
                        this.documentRut = this.getAllImage[i].path+ this.getAllImage[i].name;
                        this.showRut = this.getAllImage[i].show_document;
                        this.idFileRut= this.getAllImage[i].document_id;
                    }
                    if (this.getAllImage[i].document_id == 7) {
                        this.documentCCommerce = this.getAllImage[i].path+ this.getAllImage[i].name;
                        this.showCCommerce = this.getAllImage[i].show_document;
                        this.idFileCComerce= this.getAllImage[i].document_id;
                    }
                }
            }, error => {
                console.log(<any>error.error);
            }
        );
    }

    onAvatarChange(event){
        this.selectFile = <File> event.target.files[0];
        const file = event.dataTransfer ? event.dataTransfer.files[0] : event.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            const objetSend = {
                name:file.name,
                type:file.type,
                base64:reader.result,
                type_document_id:0
            }
            this.session_service.updateAvatarFiles(objetSend).subscribe(
                result => {
                    this.mesagge=result;
                    this.getFileAndShow();
                    this.messageService.add({severity:'info', summary: 'Notificacion', detail:this.mesagge.mesagge});
                }, error => {
                    this.messageService.add({severity:'error', summary: 'Notificacion', detail:<any>error.error.mesagge});
                    console.log(<any>error.error);
                }
            );

        }

    }

    onLogoChange(event){
        this.selectFile = <File> event.target.files[0];
        const file = event.dataTransfer ? event.dataTransfer.files[0] : event.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            const objetSend = {
                name:file.name,
                type:file.type,
                base64:reader.result,
                type_document_id:0
            }
            this.session_service.updateLogoFiles(objetSend).subscribe(
                result => {
                    this.mesagge=result;
                    this.getFileAndShow();
                    this.messageService.add({severity:'info', summary: 'Notificacion', detail:this.mesagge.mesagge});
                }, error => {
                    this.messageService.add({severity:'error', summary: 'Notificacion', detail:<any>error.error.mesagge});
                    console.log(<any>error.error);
                }
            );

        }
    }

    onIdentityChange(event){
        this.selectFile = <File> event.target.files[0];
        const file = event.dataTransfer ? event.dataTransfer.files[0] : event.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            const objetSend = {
                name:file.name,
                type:file.type,
                base64:reader.result,
                type_document_id:0
            }
            this.session_service.updateIdentityFiles(objetSend).subscribe(
                result => {
                    this.mesagge=result;
                    this.getFileAndShow();
                    this.messageService.add({severity:'info', summary: 'Notificacion', detail:'Cedula Actualizada'});
                }, error => {
                    this.messageService.add({severity:'error', summary: 'Notificacion', detail:<any>error.error.mesagge});
                    console.log(<any>error.error);
                }
            );
        }
    }

    onNitChange(event){
        this.selectFile = <File> event.target.files[0];
        const file = event.dataTransfer ? event.dataTransfer.files[0] : event.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            const objetSend = {
                name:file.name,
                type:file.type,
                base64:reader.result,
                type_document_id:0
            }
            this.session_service.updateNitFiles(objetSend).subscribe(
                result => {
                    this.mesagge=result;
                    this.getFileAndShow();
                    this.messageService.add({severity:'info', summary: 'Notificacion', detail:'Nit Actualizado'});
                }, error => {
                    this.messageService.add({severity:'error', summary: 'Notificacion', detail:<any>error.error.mesagge});
                    console.log(<any>error.error);
                }
            );
        }
    }

    onRutChange(event){
        this.selectFile = <File> event.target.files[0];
        const file = event.dataTransfer ? event.dataTransfer.files[0] : event.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            const objetSend = {
                name:file.name,
                type:file.type,
                base64:reader.result,
                type_document_id:0
            }
            this.session_service.updateRutFiles(objetSend).subscribe(
                result => {
                    this.mesagge=result;
                    this.getFileAndShow();
                    this.messageService.add({severity:'info', summary: 'Notificacion', detail:'Rut Actualizado'});
                }, error => {
                    this.messageService.add({severity:'error', summary: 'Notificacion', detail:<any>error.error.mesagge});
                    console.log(<any>error.error);
                }
            );
        }
    }

    onCComerceChange(event){
        this.selectFile = <File> event.target.files[0];
        const file = event.dataTransfer ? event.dataTransfer.files[0] : event.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            const objetSend = {
                name:file.name,
                type:file.type,
                base64:reader.result,
                type_document_id:0
            }
            this.session_service.updateCommerceFiles(objetSend).subscribe(
                result => {
                    this.mesagge=result;
                    this.getFileAndShow();
                    this.messageService.add({severity:'info', summary: 'Notificacion', detail:'Camara de Comercio Actualizada'});
                }, error => {
                    this.messageService.add({severity:'error', summary: 'Notificacion', detail:<any>error.error.mesagge});
                    console.log(<any>error.error);
                }
            );
        }
    }

    deleteFile(document_id){
        this.session_service.deleteFiles(document_id).subscribe(
            result => {
                this.mesagge=result;
                this.getFileAndShow();
                this.messageService.add({severity:'info', summary: 'Notificacion', detail:this.mesagge.mesagge});
            }, error => {
                this.messageService.add({severity:'warn', summary: 'Notificacion', detail:<any>error.error.mesagge});
                console.log(<any>error.error);
            }
        );

    }

}
