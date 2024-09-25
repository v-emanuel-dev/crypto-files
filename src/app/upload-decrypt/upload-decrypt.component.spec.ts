import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadDecryptComponent } from './upload-decrypt.component';

describe('UploadDecryptComponent', () => {
  let component: UploadDecryptComponent;
  let fixture: ComponentFixture<UploadDecryptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UploadDecryptComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UploadDecryptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
