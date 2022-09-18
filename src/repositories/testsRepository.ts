import { prisma } from "../config/database";
import { testData } from "../types/testType";

export async function findAllTests() {
    const result = await prisma.tests.findMany({});
    return result;
}

export async function findCategoryByName( categoryName: string ) {
    const result = await prisma.categories.findUnique({
        where: { name: categoryName }
    });
    return result;
}

export async function findDisciplineByName( disciplineName: string ) {
    const result = await prisma.disciplines.findUnique({
        where: { name: disciplineName }
    });
    return result;
}

export async function findTeacherByName( teacherName: string ) {
    const result = await prisma.teachers.findUnique({
        where: { name: teacherName }
    });
    return result;
}

export async function insertTeacherDiscipline( disciplineId: number, teacherId: number ) {
    const result = await prisma.teachersDisciplines.create({
        data: { teacherId, disciplineId }
    })
    return result.id;
}

export async function insertTest(test: testData) {
    const result = await prisma.tests.create({ data: test });
    return result.id;
}
