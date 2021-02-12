import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { University } from '../model/University';
import { Router } from '@angular/router';

@Component({
  selector: 'app-universities',
  templateUrl: './universities.component.html',
  styleUrls: ['./universities.component.css']
})

export class UniversitiesComponent implements OnInit {

  universities: Array<University>;
  selectedUniversity: University;
  
  constructor(private dataService: DataService,
              private router: Router) { }

  ngOnInit(): void {
    this.getUniversities();
  }

  private getUniversities()
  {
    this.dataService.getUniversity().subscribe(data => {
      this.universities = data;
    });
  }

  universityDetails(id: number){
    this.router.navigate(['employee-details', id]);
  }

  updateUniversity(id: number){
    this.router.navigate(['update-employee', id]);
  }

  // deleteUniversity(id: number){
  //   this.dataService.deleteUniversity(id).subscribe( data => {
  //     console.log(data);
  //     this.getUniversities();
  //   })
  // }
}
