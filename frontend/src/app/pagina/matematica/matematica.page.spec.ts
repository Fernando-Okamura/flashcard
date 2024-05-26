import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatematicaPage } from './matematica.page';

describe('MatematicaPage', () => {
  let component: MatematicaPage;
  let fixture: ComponentFixture<MatematicaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MatematicaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
