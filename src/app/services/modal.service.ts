import { Injectable } from '@angular/core';

interface IModal {
  id: string;
  visible: boolean;
}

// Tells Angular this can be injected into a component, you want to set to this 99% of the time.
@Injectable({
  providedIn: 'root',
})
export class ModalService {
  // private means it can only be accessed within this class.
  private visible = false;
  // array of modals
  private modals: IModal[] = [];

  constructor() {}

  register(id: string) {
    this.modals.push({ id, visible: false });
  }

  isModalVisible(id: string): boolean {
    // ? - optional chaining, if the first part is undefined, it will return undefined.
    return !!this.modals.find((element) => element.id === id)?.visible;
  }

  toggleModal(id: string) {
    const modal = this.modals.find((element) => element.id === id);
    if (modal) {
      modal.visible = !modal.visible;
    }
  }
}
