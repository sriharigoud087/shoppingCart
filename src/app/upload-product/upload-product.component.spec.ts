import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {FormControl} from '@angular/forms';
import { UploadProductComponent } from './upload-product.component';

describe('UploadProductComponent', () => {
  let component: UploadProductComponent;
  let fixture: ComponentFixture<UploadProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
