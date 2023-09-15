import { db } from 'api/src/lib/db'

export default async () => {
  try {
    // Seed data for HeadQuarter
    const headQuarterData = [
      {
        name: 'sede 1',
        description: 'Description for Headquarter 1',
      },
      {
        name: 'sede 2',
        description: 'Description for Headquarter 2',
      },
      // Add more HeadQuarter data as needed
    ]

    // Seed data for ProgramOfStudy
    const programOfStudyData = [
      {
        name: 'Program 1',
        body: 'Program 1 description',
        image: 'program1.jpg',
        description: 'Description for Program 1',
        active: true,
        programType: 'PREGRADO', // You can use enum values
        carrerType: 'TECNICO',
        headQuarter: {
          connect: {
            where: {
              id: 1,
            },
          },
        },
      },
      {
        name: 'Program 2',
        body: 'Program 2 description',
        image: 'program2.jpg',
        description: 'Description for Program 2',
        active: true,
        programType: 'POSGRADO',
        carrerType: 'PROFESIONAL',
        headQuarter: {
          connect: {
            where: {
              id: 2,
            },
          },
        },
      },
      // Add more ProgramOfStudy data as needed
    ]

    // Seed data for Acredition
    const acredictionData = [
      {
        name: 'Acredition 1',
        description: 'Description for Acredition 1',
        program: {
          connect: {
            where: {
              id: 1,
            },
          },
        },
      },
      {
        name: 'Acredition 2',
        description: 'Description for Acredition 2',
        program: {
          connect: {
            where: {
              id: 2,
            },
          },
        },
      },
      // Add more Acredition data as needed
    ]

    // Seed data for Document
    const documentData = [
      {
        name: 'Document 1',
        description: 'Description for Document 1',
        url: 'document1.pdf',
        acredition: {
          connect: {
            where: {
              id: 1,
            },
          },
        },
      },
      {
        name: 'Document 2',
        description: 'Description for Document 2',
        url: 'document2.pdf',
        acredition: {
          connect: {
            where: {
              id: 1,
            },
          },
        },
      },
      // Add more Document data as needed
    ]

    // Seed data for User
    const userData = [
      {
        name: 'Alice',
        email: 'alice@example.com',
        hashedPassword: 'password1',
        role: 'CLIENT', // You can use enum values
      },
      {
        name: 'Arnoldo',
        email: 'Arnoldo@Arnoldo.com',
        hashedPassword: 'password2',
        role: 'ADMIN',
      },
      // Add more User data as needed
    ]

    // Insert data into the database using Prisma client
    await db.programOfStudy.createMany({
      data: programOfStudyData,
    })

    await db.headQuarter.createMany({
      data: headQuarterData,
    })

    await db.acrediction.createMany({
      data: acredictionData,
    })

    await db.document.createMany({
      data: documentData,
    })

    await db.user.createMany({
      data: userData,
    })

    console.log('Seed data inserted successfully.')
  } catch (error) {
    console.error('Error while seeding data:', error)
  }
}
