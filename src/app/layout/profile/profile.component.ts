import {Component, OnInit} from '@angular/core';
import {routerTransition} from '../../router.animations';
import {ProfileUser} from "../../global/models/profile-user";
import {MessageService, SelectItem, SelectItemGroup} from "primeng/api";
import {GeneralService, SessionsService} from "../../shared/services";
import {Departament} from "../../global/models/departament";
import {Cities} from "../../global/models/cities";
import {FormGroup} from "@angular/forms";
import {ModelFile} from "../../global/models/modelFile";

@Component({
    selector: 'app-form',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss'],
    animations: [routerTransition()],
    providers:[MessageService]
})
export class ProfileComponent implements OnInit {

    public dataProfile:ProfileUser;
    public departamentsend:Departament;
    public departamentinvoice:Departament;
    public cities_send:Cities;
    public cities_invoice:Cities;
    public dataFile:ModelFile;
    public data:any;
    public data_invoice:any;
    public data_send:any;
    public data_departament:any;
    public selectedSendCity: any;
    public selectedSenddepartament: any;
    public selectedInvoiceCity: any;
    public selectedInvoiceDepartament: any;

    constructor(
        private session_service: SessionsService,
        private general_service: GeneralService,
        private messageService: MessageService,
    ) {
        this.dataProfile = new ProfileUser();
        this.dataFile = new ModelFile();
        this.departamentsend = new Departament();
        this.departamentinvoice = new Departament();
    }

    ngOnInit() {
        var departament_detail_send;
        var departament_detail_invoice;
        var cities_detail_send;
        var cities_detail_invoice;
        this.session_service.getData().subscribe(
            result => {
                this.data=result;
                this.dataProfile =this.data;
                console.log(this.dataProfile);
                departament_detail_send = [{id: this.dataProfile.send_departament_id , description: this.dataProfile.send_departament_name, code:'00'}];
                departament_detail_invoice = [{id: this.dataProfile.invoise_departament_id , description: this.dataProfile.invoise_departament_name, code:'00'}];
                cities_detail_invoice = [{id: this.dataProfile.invoice_city_id , description: this.dataProfile.invoise_city_name, code:'00'}];
                cities_detail_send= [{id: this.dataProfile.send_city_id , description: this.dataProfile.send_city_name, code:'00'}];
            }, error => {
                console.log(<any>error.error);
            }
        );
        this.general_service.getDepartament().subscribe(
            result => {
                this.data_departament=result;
                Array.prototype.push.apply(departament_detail_invoice, this.data_departament);
                Array.prototype.push.apply(departament_detail_send, this.data_departament);
                this.data_invoice=departament_detail_invoice;
                this.data_send=departament_detail_send;
                this.departamentinvoice =this.data_invoice;
                this.departamentsend =this.data_send;
                this.cities_send =cities_detail_send;
                this.cities_invoice =cities_detail_invoice;
            }, error => {
                console.log(<any>error.error);
            }
        );
    }

    getCityDepartamentSend(selec_send){
        var datadepartamentinit = [{id: 0 , description: "Selecciona", code:'00'}];
        if (selec_send){
            this.general_service.getCity(selec_send.id).subscribe(
                result => {
                    Array.prototype.push.apply(datadepartamentinit,result);
                    this.data = datadepartamentinit
                    this.cities_send = this.data;
                }, error => {
                    console.log(<any>error.error);
                }
            );
            if (selec_send.id == 4){
                this.dataProfile.send_city_id=149;
            }
        }
    }
    getCityDepartamentInvoice(selec_invoice){
        var datadepartamentinit = [{id: 0 , description: "Selecciona", code:'00'}];
        if (selec_invoice){
            this.general_service.getCity(selec_invoice.id).subscribe(
                result => {
                    Array.prototype.push.apply(datadepartamentinit,result);
                    this.data = datadepartamentinit;
                    this.cities_invoice = this.data;
                }, error => {
                    console.log(<any>error.error);
                }
            );
            if (selec_invoice.id == 4){
                this.dataProfile.invoice_city_id=149;
            }
        }
    }

    updateCitySend(select_city){
        if (select_city){
            this.dataProfile.send_city_id=select_city.id;
        }
    }

    updateCityInvoice(select_city){
        if (select_city){
            this.dataProfile.invoice_city_id=select_city.id;
        }
    }

    onSubmit(){

        this.session_service.updateData(this.dataProfile).subscribe(
            result => {
                this.messageService.add({severity:'info', summary: 'Info Message', detail:'Informacion Actualizada'});
            }, error => {
                console.log(<any>error.error);
            }
        );
    }


    clear() {
        this.messageService.clear();
    }
}
