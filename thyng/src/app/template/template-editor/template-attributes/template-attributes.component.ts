import { Component, Input } from '@angular/core';
import { Template } from '../../template';

@Component({
  selector: 'app-template-attributes',
  templateUrl: './template-attributes.component.html',
  styles: [
  ]
})
export class TemplateAttributesComponent {

  private _template!: Template;
  attributes: [string, string][] = [];

  @Input()
  get template(): Template {
    return this._template!;
  }
  set template(template: Template) {
    this._template = template;
    this.attributes = Object.entries<string>(template.attributes);
  }

  create(){
    this.attributes.push(['','']);
    this.update();
  }

  update(){
    this._template.attributes = {};
    this.attributes.forEach(attribute => {
      this._template.attributes[attribute[0]] = attribute[1];
    });
  }

  delete(attribute: any){
    this.attributes.splice(this.attributes.indexOf(attribute), 1);
    this.update();
  }

}
