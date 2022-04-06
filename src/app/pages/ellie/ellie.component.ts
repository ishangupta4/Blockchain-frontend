import { Component, OnInit, Input } from '@angular/core';
// import { BlockchainService } from '../../services/blockchain.service';
@Component({
  selector: 'app-blockchain-viewer',
  templateUrl: './index.html',
  styleUrls: ['./src/scss/style.scss']
})
export class BlockchainHomeComponent implements OnInit {

//   public blocks = [];
//   public selectedBlock = null;

//   constructor(private blockchainService: BlockchainService) {
//     this.blocks = blockchainService.blockchainInstance.chain;
//     this.selectedBlock = this.blocks[0];
//     console.log(this.blocks);
//   }

  ngOnInit() {
  }

}
