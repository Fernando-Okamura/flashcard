import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CriePage } from './crie.page';

describe('CriePage', () => {
  let component: CriePage;
  let fixture: ComponentFixture<CriePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CriePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
