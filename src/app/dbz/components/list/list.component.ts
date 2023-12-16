import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Character } from "../../interfaces/character";

@Component({
  selector: "dbz-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"]
})
export class ListComponent {
  @Input()
  public characterList: Character[] = [
    {
      name: "Trunks",
      power: 10
    }
  ];

  // @Output() public onDelete: EventEmitter<number> = new EventEmitter();
  // onDeleteCharacter(index: number): void {
  //   this.onDelete.emit(index);
  // }
  @Output() public onDelete: EventEmitter<string> = new EventEmitter();
  deleteCharacter(id: string | undefined): void {
    this.onDelete.emit(id);
  }
}
