import { db } from 'api/src/lib/db'
import CryptoJS from 'crypto-js'
// Function to generate random string
const getRandomString = () => Math.random().toString(36).substring(7)

// Function to generate random boolean
const getRandomBoolean = () => Math.random() >= 0.5

// Function to generate random integer
const getRandomInt = (max) => Math.floor(Math.random() * max) + 1

// hashes a password using either the given `salt` argument, or creates a new
// salt and hashes using that. Either way, returns an array with [hash, salt]
const _hashPassword = (salt) => {
  return CryptoJS.PBKDF2('passworrrd1', salt, { keySize: 256 / 32 }).toString()
}
// Seed script
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

    // Seed data for Faculty
    const facultyData = [
      {
        name: 'Faculty 1',
      },
      {
        name: 'Faculty 2',
      },
    ]

    // Seed data for AcademicGroup
    const academicGroupData = [
      {
        name: 'Group 1',
        facultyId: 1,
      },
      {
        name: 'Group 2',
        facultyId: 2,
      },
      // Add more AcademicGroup data as needed
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
        classification: 'ACREDITADO',
        expirationYear: getRandomInt(10) + 2023,
        docenciaServicio: getRandomBoolean(),
        headQuarterId: 1,
        academicGroupId: 1,
      },
      {
        name: 'Program 2',
        body: 'Program 2 description',
        image: 'program2.jpg',
        description: 'Description for Program 2',
        active: true,
        programType: 'POSGRADO',
        carrerType: 'PROFESIONAL',
        classification: 'ACREDITADO',
        expirationYear: getRandomInt(10) + 2023,
        docenciaServicio: getRandomBoolean(),
        headQuarterId: 2,
        academicGroupId: 2,
      },
      // Add more ProgramOfStudy data as needed
    ]

    // Seed data for Acredition
    const acreditionData = [
      {
        name: 'Acredition 1',
        description: 'Description for Acredition 1',
        programId: 1,
      },
      {
        name: 'Acredition 2',
        description: 'Description for Acredition 2',
        programId: 2,
      },
      // Add more Acredition data as needed
    ]

    // Seed data for qualifiedRegistry
    const qualifiedRegistry = [
      {
        name: 'qualifiedRegistry 1',
        description: 'Description for Acredition 1',
        programId: 1,
      },
      {
        name: 'qualifiedRegistry 2',
        description: 'Description for Acredition 2',
        programId: 2,
      },
    ]

    // Seed data for Document
    const documentData = [
      {
        name: 'Document Acredition 1',
        description: 'Description for Acredition 1',
        url: 'document1.pdf',
        acreditionId: 1,
      },
      {
        name: 'Document Acredition 2',
        description: 'Description for Acredition 2',
        url: 'document2.pdf',
        acreditionId: 2,
      },
      {
        name: 'Document qualifiedRegistry 1',
        description: 'Description for qualifiedRegistry 1',
        url: 'document2.pdf',
        qualifiedRegistryId: 1,
      },
      {
        name: 'Document qualifiedRegistry 2',
        description: 'Description for qualifiedRegistry 2',
        url: 'document2.pdf',
        qualifiedRegistryId: 2,
      },
      // Add more Document data as needed
    ]
    const salt = getRandomString()
    const salt2 = getRandomString()

    // Seed data for User
    const userData = [
      {
        name: 'Alice',
        email: 'alice@example.com',
        hashedPassword: _hashPassword(salt),
        salt: salt,
        resetToken: getRandomString(),
        resetTokenExpiresAt: new Date(),
      },
      {
        name: 'Arnoldo',
        email: 'Arnoldo@Arnoldo.com',
        hashedPassword: _hashPassword(salt2),
        salt: salt2,
        resetToken: getRandomString(),
        resetTokenExpiresAt: new Date(),
      },
      // Add more User data as needed
    ]

    console.log(
      'start seeding ------------------------------------------ start seeding'
    )

    await db.headQuarter.createMany({
      data: headQuarterData,
    })

    await db.faculty.createMany({
      data: facultyData,
    })

    await db.academicGroup.createMany({
      data: academicGroupData,
    })

    await db.programOfStudy.createMany({
      data: programOfStudyData,
    })

    await db.acredition.createMany({
      data: acreditionData,
    })

    await db.qualifiedRegistry.createMany({
      data: qualifiedRegistry,
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
    throw new Error(error)
  }
}
