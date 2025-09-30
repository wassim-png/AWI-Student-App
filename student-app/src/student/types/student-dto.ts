export interface StudentDto {
    id?: number,
    firstname: string,
    name: string, 
    filiere: string,
    promo: number, 
    inscription: Date,
    prix: number, 
}

type StudentPartial = Partial<StudentDto> 
