import { Component, OnInit } from '@angular/core';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FileUploadService } from '../../services/file-upload.service';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
})
export class AvatarComponent implements OnInit {
  constructor(private uploadService: FileUploadService) {}

  selectedFiles?: FileList;
  currentFile?: File;
  progress = 0;
  message = '';
  preview = '';

  imageInfos?: Observable<any>;

  username: string = 'Raul Rincones';
  url: string = '';
  //https://www.w3schools.com/howto/img_avatar.png
  onSelectFile(bild: any) {
    this.url = bild.target.files[0].name;
    console.log('bild--->', bild);
  }
  getInitalsFromName() {
    if (this.username) {
      const initial = this.username.substring(0, 1);
      return initial.toUpperCase();
    }
    return;
  }

  ngOnInit(): void {
    this.imageInfos = this.uploadService.getFiles();
  }

  selectFile(event: any): void {
    this.message = '';
    this.preview = '';
    this.selectedFiles = event.target.files;

    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);

      if (file) {
        this.preview = '';
        this.currentFile = file;

        const reader = new FileReader();

        reader.onload = (e: any) => {
          console.log(e.target.result);
          this.preview = e.target.result;
        };

        reader.readAsDataURL(this.currentFile);
        this.upload();
      }
    }
  }

  upload(): void {
    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);

      if (file) {
        this.currentFile = file;

        this.uploadService.upload(this.currentFile).subscribe({
          next: (event: any) => {
            this.imageInfos = this.uploadService.getFiles();
          },
          error: (err: any) => {
            console.log(err);

            if (err.error && err.error.message) {
              this.message = err.error.message;
            } else {
              this.message = 'Could not upload the image!';
            }

            this.currentFile = undefined;
          },
        });
      }
      console.log(this.currentFile);
      this.selectedFiles = undefined;
    }
  }
}
