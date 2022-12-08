import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  
  clientes: Cliente[] | undefined;

  constructor(private clienteService : ClienteService) { }

  ngOnInit(): void {
    this.clienteService.getClientes().subscribe(
       clientes => this.clientes = clientes
    );
  }

  delete(cliente : Cliente): void {
    Swal.fire({
      title: 'Esta seguro?',
      text: "Este cambio no puede revertirse!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        this.clienteService.delete(cliente.id).subscribe(
        response => {
          this.clientes = this.clientes?.filter(cli => cli !== cliente);
          Swal.fire(
            'Eliminado!',
            `El cliente ${cliente.nombre} ha sido eliminado.`,
            'success'
          );
        });
      }
    });

    
  }
}
