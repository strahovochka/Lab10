import { AbstractControl, ValidatorFn } from "@angular/forms";
import { DepartmentValidatorService } from "./department-validator-service.service";

export function departmentValidator() : ValidatorFn {
    return (
        control: AbstractControl
    ): { [key: string]: boolean } | null => {
        let validator = new DepartmentValidatorService();
        let valid = !control.value || validator.validateDepartment(control.value)
        return valid ? null : { name: true}
    }
}