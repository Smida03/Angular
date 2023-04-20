import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InscriptionService } from '../service/inscription-service.service';
import { utilisateur } from '../models/utilisateur.model';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  user : utilisateur=new utilisateur();
  inscriptionForm!: FormGroup;

  constructor(private fb: FormBuilder,private inscriptionService: InscriptionService) { }

  ngOnInit() {
    this.inscriptionForm = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      adresse: ['', Validators.required],
      pays: ['', Validators.required],
      role: ['', Validators.required],
    });
  }

  onSubmit() {
    console.log(this.user);
    const role: string = this.inscriptionForm.value.role;
    this.inscriptionService.inscription(this.user,role).subscribe(( data: any)=> {
       // récupérez l'ID de l'utilisateur nouvellement créé à partir des données de réponse
       const userId = data.id;
       // Ajoutez un enregistrement "user_role" en appelant la méthode "addUserRole"
       if (role === 'client') {
         this.inscriptionService.addUserRole(userId, 1).subscribe((data: any) => {
           console.log(data);
         });
       } else if (role === 'partenaire') {
         this.inscriptionService.addUserRole(userId, 2).subscribe((data: any) => {
           console.log(data);
         });
       }
     });
}
}