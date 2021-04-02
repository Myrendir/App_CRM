import {Component, OnInit} from '@angular/core';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.css']
})
export class InvoicesComponent implements OnInit {

  constructor() {
  }

  generatePDF(): void {
    const docDef = {
      header: 'App CRM',
      content: 'PDF test'
    };

    pdfMake.createPdf(docDef).open();
  }

  ngOnInit(): void {
  }

}
