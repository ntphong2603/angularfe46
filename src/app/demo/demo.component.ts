import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-demo", //#id, class, tagname(sử dụng selector như tag name của component)
  templateUrl: "./demo.component.html", //Nơi hiện thị nội dụng UI của component (giống nội dụng hàm render)
  styleUrls: ["./demo.component.scss"], //Phần css của componetn này (component khác suwr dụng không được)
})
export class DemoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
