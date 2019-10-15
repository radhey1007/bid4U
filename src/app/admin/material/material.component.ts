import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialComponent implements OnInit {
  file: any = []
  material: any = {
    label: '',
    file: ''
  }
  errMSG: any = ''
  formData: FormData = new FormData();
  constructor() { }

  ngOnInit() {
  }
  onFileChange(event) {
    // this.formData.delete('file');
    // this.file.length = 0;
    this.clearFile();
    if (event.target.files && event.target.files.length > 0) {
      if (event.target.files[0].size / 1024 / 1024 > 5) {
        this.errMSG = 'file is bigger than 5MB;Upto 5MB file size allow.'
        console.log('file is bigger than 5MB');
      }
      let fileData: File = event.target.files[0];
      let sizedata = Math.round(fileData.size / 1024);
      this.file.push({
        name: fileData.name,
        size: sizedata + ' KB',
        type: fileData.type
      });
      this.formData.append('file', fileData, fileData.name);
      console.log(this.formData.getAll('file'));
      console.log(this.file)
    }
  }
  postMaterial = () => {
console.log('validate');
  }
  clearFile=(btn?)=>{
    this.formData.delete('file');
    this.file.length = 0;
    if(btn=='is'){
      this.material.file='';
    }
   
  }
}
