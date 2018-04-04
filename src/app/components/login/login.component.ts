import { Component, OnInit } from '@angular/core';
import {Http, Response, RequestOptions, Headers} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	private files = [];
	constructor(
		private http : Http
		) { }

	ngOnInit() {
	}

	fileUpload(event) {
		let fileList: FileList = event.target.files;
		if(fileList.length > 0) {
			let file: File = fileList[0];
			let formData:FormData = new FormData();
			formData.append('photo', file, file.name);

			let headers = new Headers();
			headers.append('Accept', 'application/json');
			headers.append('Authorization','Bearer ' + localStorage.token );

			let options = new RequestOptions({ headers: headers });
			this.http.post("http://127.0.0.1:8000/fileUpload", formData, options)
			.map(res => res.json())
			.catch(error => Observable.throw(error))
			.subscribe(
				data => console.log('success'),
				error => console.log(error)
				)
		}
	}

	getfileList(){
		this.http.get("http://127.0.0.1:8000/getFiles")
			.map(res => res.json())
			.catch(error => Observable.throw(error))
			.subscribe(
				data => {
					this.files = data;
				},
				error => console.log(error)
			)
	}
}
