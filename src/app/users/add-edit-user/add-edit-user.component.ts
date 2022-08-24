import { Component } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { AppService,User } from 'src/app/app.service';

@Component({
  selector: 'app-add-edit-user',
  templateUrl: './add-edit-user.component.html',
  styleUrls: ['./add-edit-user.component.css']
})
export class AddEditUserComponent {
  user: User = { id: 0, name: "", address: "" };
  constructor(
    public appService: AppService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    console.log("route", this.route);
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get("id"));
      this.user = this.appService.getUser(id);
    });
  }

  onCancel() {
    this.router.navigateByUrl("/users");
  }

  onSave() {
    if (this.user.id > 0) {
      this.appService.updateUser(this.user);
    } else {
      this.appService.addUser(this.user);
    }
    this.router.navigateByUrl("/users");
  }

  onDelete() {
    this.appService.deleteUser(this.user.id);
    this.router.navigateByUrl("/users");
  }
   }

  

