import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchItem: string = ""

  constructor(private route: ActivatedRoute, private router: Router) {

  }
  ngOnInit(): void {
    this.route.params.subscribe(paramas => {
      if (paramas['searchItem'])
        this.searchItem = paramas['searchItem']
       console.log(paramas['searchItem'])
        console.log(this.searchItem)
    })
  }
  search(): void {
    if (this.searchItem) {
      this.router.navigateByUrl('/search/' + this.searchItem)
    }
  }
 
  
}
