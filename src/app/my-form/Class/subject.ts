enum ControllType {
    zalik,
    exam
}
export class Subject {
    name: string = "";
    department: string = "";
    lecturesCount: number = 1;
    labsCount: number = 1;
    controll: ControllType = ControllType.zalik;
    labProfessor: string = "";
    lecturers: string[] = [];

    constructor(name: string, department: string, lecturesCount: number, labsCount: number, controll: string, labProfessor: string, lecturers: string[]) {
        this.name = name;
        this.department = department;
        this.lecturesCount = lecturesCount;
        this.labsCount = labsCount;

        switch (controll) {
            case "exam": 
                this.controll = ControllType.exam;
                break;
            default:
                this.controll = ControllType.zalik;
        }

        this.lecturers = lecturers;
        this.labProfessor = labProfessor;
    }

    getControl() : string {
        switch (this.controll) {
            case ControllType.exam:
                return "exam"
            case ControllType.zalik:
                return "zalik"
        }
    }
}