export class Candidate {
  id: number;
  firstName: number;
  lastName: number;
  dob: Date;
  gender: Gender;
  gpa: number;
}

enum Gender{
  MALE,
  FEMALE
}
