import { Component, OnInit } from '@angular/core';
import { CommunicationService } from 'src/app/services/app.coomunication.service';


@Component({
  selector: 'search-component',
  templateUrl: './search.view.html'
})
export class SearchComponent implements OnInit {
  constructor(private commService : CommunicationService) {

  }
  ngOnInit(): void {

  }

  search(event)
  {
    this.commService.onEmiteValue({searchQuery:event.target.value})
  }
}
