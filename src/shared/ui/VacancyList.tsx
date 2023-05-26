import { CardVacancy } from "~entities/vacancy/CardVacancy"

export const VacancyList = ( ) => {

    let vacancy:number[] = [1,2,3]

    return (
        <div>
        {
            vacancy.map((el:number) => <CardVacancy key={el}/> )

        }
        </div>

    )

}