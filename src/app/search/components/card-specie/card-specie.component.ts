import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Specie } from '../../../core/models/specie.model';

@Component({
  selector: 'sw-card-specie',
  template: `
    <li class="flex flex-row">
      <div class="flex flex-col md:flex-row">
        <img class="block w-9x h-9x overflow-hidden rounded bg-center bg-cover items-center flex-none mr-2x mb-2x md:mb-0"
             [defaultImage]="defaultImage"
             [lazyLoad]="images"
             [useSrcset]="true"
             [offset]="offset">
        <div>
          <h2 class="text-black text-base leading-3x font-semibold"> {{ specie.name }} </h2>
          <div class="text-grey-dark leading-3x">
            Classification: {{ specie.classification }} /
            Designation: {{ specie.designation }} /
            Language: {{ specie.language }}
          </div>
          <div class="leading-3x text-grey-darkest"> Last edited: {{ specie.edited | date:'longDate' }}</div>
        </div>
      </div>
    </li>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardSpecieComponent {
  offset = 100;
  defaultImage = 'assets/species2-5x.jpg';
  images = `assets/species2-90x.jpg 90w,
            assets/species2-180x.jpg 180w`;

  @Input()
  specie: Specie;
}
