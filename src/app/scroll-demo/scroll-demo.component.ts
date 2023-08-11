import {  ChangeDetectionStrategy, Component, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-scroll-demo',
  templateUrl: './scroll-demo.component.html',
  styleUrls: ['./scroll-demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScrollDemoComponent  {
    // simple demo. psuedo code but not best practice
    // move to streams and data to parent component
  
    // Variable to keep track of the current index for item generation
    public currrentIndex = 0;
  
    // Initial height of the container
    public height = 0;

    // How many items to display after button clicked
    public readonly itemSize = 20;
  
    // Array to hold the items
    public items: string[] = []
  
    // ViewChild decorator to get a reference to the container
    @ViewChild('container', { read: ViewContainerRef }) readonly vcRef?: ViewContainerRef;
    
    // Function to load more items into the list
    public loadMore(items: number): void {
      // Generate new items and append them to the existing list
      const newAddition = Array.from({ length: items }).map((_, i) => {
        this.currrentIndex++;
        return `Item #${this.currrentIndex}`;
      });
  
      // Append the new items to the existing items array
      this.items.push(...newAddition);
  
      // Create a new array reference to trigger change detection
      this.items = [...this.items];

      console.log(this.items.length)
  
      // Update the document height to accommodate the new items
      this.updateDocumentHeight();
    }
  
    // Private function to update the document height based on the content
    private updateDocumentHeight(): void {
      // Set the height of the container to fit the content
      // Manually calculate the height of the container
      this.height = this.height + 750;
    }
}
 