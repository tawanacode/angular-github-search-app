import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from "../data.service";

@Component({
  selector: 'app-single-item-page',
  templateUrl: './single-item-page.component.html',
  styleUrls: ['./single-item-page.component.scss']
})

export class SingleItemPageComponent implements OnInit {
  repoData: any;
  closedIssuesCount: number;
  closedIssues:any;
  openIssues:any;

  constructor(private route: ActivatedRoute, private router: Router, private data: DataService) { }

  ngOnInit() {
    let name = this.route.snapshot.paramMap.get('name');
    let repo = this.route.snapshot.paramMap.get('repo');
    this.data.getRepo(name, repo).subscribe(data => {
      this.repoData = data;
    })

    this.data.getRepoIssues(name, repo, 'closed').subscribe(
      data => {
        this.closedIssuesCount = data.total_count;
        this.closedIssues = data;
      })

      this.data.getRepoIssues(name, repo, 'open').subscribe(
        data => {
          this.openIssues = data;
        })
  }

  onBack():void {
    this.router.navigate(['/search-page']);
  }
}
