import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadEncryptComponent } from './upload-encrypt.component';

describe('UploadEncryptComponent', () => {
  let component: UploadEncryptComponent;
  let fixture: ComponentFixture<UploadEncryptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UploadEncryptComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UploadEncryptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
