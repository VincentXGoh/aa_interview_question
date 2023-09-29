import { Component, OnInit  } from '@angular/core';

class TreeNode {
  constructor(
    public value: number,
    public left: TreeNode | null = null,
    public right: TreeNode | null = null
   ) {}
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  ngOnInit(){
    // Target value is passed in, in this case 18
    this.searchValue(18);
  }

  private root: TreeNode | null = null;

  constructor() {
    // Example tree node
    this.root = new TreeNode(1)
    this.root.left = new TreeNode(2);
    this.root.right = new TreeNode(32);
    this.root.left.left = new TreeNode(10);
    this.root.left.right = new TreeNode(5);
    this.root.right.left = new TreeNode(18);
    this.root.right.right = new TreeNode(9);
  }

  // Recursive function
  search(target: number, node: TreeNode | null = this.root): boolean {
    if (!node) {
      return false; // return false if the tree is empty or it is the end of leaf node
    }

    // Check if root.value is equal to target
    if (node.value === target) {
      return true; // return true if current node matches the target
    } else if (target < node.value) {
      return this.search(target, node.left);  // Recursive search on left subtree
    } else {
      return this.search(target, node.right); // Recursive search on right subtree
    }
  }

  searchValue(target: number) {
    if (this.search(target)) {
      console.log('Found target', target, 'in the binary tree.');
    } else {
      console.log(target, ' not found in the binary tree.');
    }
  }
}
