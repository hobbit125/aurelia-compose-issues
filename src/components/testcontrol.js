import { customElement } from 'aurelia-framework';

@customElement('testcontrol')
export class TestControl {
  activate (params) {

    // This is strange as well.

    // Based on documentation,
    // would think that this line should be:
    //    this.user = params.model
    //
    // In the past, somehow it was:
    //    this.user = params.user
    //
    // Now, params *is* the model (it seems???)
    this.user = params;
  }
}
