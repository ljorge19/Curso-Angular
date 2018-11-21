import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveRoutingComponent } from './archive-routing.component';

describe('ArchiveRoutingComponent', () => {
  let component: ArchiveRoutingComponent;
  let fixture: ComponentFixture<ArchiveRoutingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchiveRoutingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchiveRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
