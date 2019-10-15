import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MantenimientoService {

  private objetos: AngularFirestoreCollection<any>;
  mantenimientoFiltro: any[] = [];
  private orders: Observable<any[]>;
  public x:number;
  
  private itemsFiltros: AngularFirestoreCollection;

  constructor(private afs: AngularFirestore) { 
    this.objetos = this.afs.collection<any>('escenario');
    this.orders = this.objetos.snapshotChanges().pipe(map(
      actions => actions.map(a => {
        const data = a.payload.doc.data() as any;
        const id = a.payload.doc.id;
        return { id, ...data };
      })
    ));
  }

  public listar(): Observable<any[]> {
    return this.orders;
  }

  public buscar(id: string): Observable<any> {
    return this.objetos.doc(id).snapshotChanges();
  }

  public update(id: string, objeto: any): Promise<any> {
    return this.objetos.doc(id).update(objeto);
  }

  public delete(id: string): Promise<any> {
    return this.objetos.doc(id).delete();
  }

  public create(objeto: any,padre: any): Promise<any> {
    return this.objetos.doc(padre).set(objeto);
  }
  cargarMensajes():Observable<any[]> {

    this.itemsFiltros = this.afs.collection('escenario' , ref => ref.where('mantenimientos.getFiltro','==',1570838400000));
    var itemsMantenimiento;
    return this.itemsFiltros.valueChanges().pipe
      (map((mensajes: any[]) => {
        console.log(mensajes);
       var s= new Date(1570838400000);
        console.log(s);

        itemsMantenimiento = [];
        for (let mensaje of mensajes) {
          //if(mensaje.uidLogueado===this.usuar.uid
            //&& mensaje.uidReceptor===this.usuReceptor.uid){
            
            itemsMantenimiento.push(mensaje);
            //}
        }

        console.log(itemsMantenimiento);
        return itemsMantenimiento;
      }))
  }
   
}
