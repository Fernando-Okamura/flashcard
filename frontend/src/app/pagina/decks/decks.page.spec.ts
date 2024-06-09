import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DecksPage } from './decks.page';

describe('DecksPage', () => {
  let component: DecksPage;
  let fixture: ComponentFixture<DecksPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DecksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
