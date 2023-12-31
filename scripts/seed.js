import { db } from 'api/src/lib/db'
import CryptoJS from 'crypto-js'
// Function to generate random string
const getRandomString = () => Math.random().toString(36).substring(7)

// Function to generate random boolean
const getRandomBoolean = () => Math.random() >= 0.5

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
        name: 'Bogotá',
        description: 'Sede de bogotá',
      },
      {
        name: 'Virtual',
        description: 'Sede virtual',
      },
      // Add more HeadQuarter data as needed
    ]

    // Seed data for Faculty
    const facultyData = [
      {
        name: 'Salud',
      },
      {
        name: 'Faculty 2',
      },
    ]

    // Seed data for AcademicGroup
    const academicGroupData = [
      {
        name: 'Cuidado y Gestión en Salud',
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
        name: 'Enfermería',
        image:
          'https://umb.edu.co/wp-content/uploads/2023/09/Pregrado-en-enfermeria.webp',
        description:
          '¿Sabías que el personal de enfermería conforma más del 60% de la fuerza de trabajo de salud y cubre el 80% de las necesidades de atención en todo el mundo? Hace unos años, la OMS publicó un estudio en el que concluyó que existe una escasez de personal de esta área de la salud en todo el mundo.',
        active: true,
        programType: 'PREGRADO', // You can use enum values
        carrerType: 'PROFESIONAL',
        classification: 'ACREDITADO',
        docenciaServicio: true,
        headQuarterId: 1,
        academicGroupId: 1,
        credits: 170,
        coursesNumber: 71,
        sniesCode: '123123',
        spaceAvailable: 140,
        duration: 9,
        admissionPeriod: 6,
      },
      {
        name: 'Program 2',
        image: 'program2.jpg',
        description: 'Description for Program 2',
        active: true,
        programType: 'POSGRADO',
        carrerType: 'PROFESIONAL',
        classification: 'ACREDITADO',
        docenciaServicio: getRandomBoolean(),
        headQuarterId: 2,
        academicGroupId: 2,
        credits: 32,
        sniesCode: '123123',
        coursesNumber: 12,
      },
      // Add more ProgramOfStudy data as needed
    ]

    // Seed data for Acredition
    const acreditionData = [
      {
        name: 'Acredition 1',
        resolution: '123123',
        programId: 1,
      },
      {
        name: 'Acredition 2',
        resolution: '123123',
        programId: 2,
      },
      // Add more Acredition data as needed
    ]

    // Seed data for qualifiedRegistry
    const qualifiedRegistryData = [
      {
        name: 'qualifiedRegistry 1',
        resolution: '123123',
        programId: 1,
      },
      {
        name: 'qualifiedRegistry 2',
        resolution: '123123',
        programId: 2,
      },
    ]

    // Seed data for Acredition
    const programUpdateData = [
      {
        name: 'programUpdate 1',
        resolution: '123123',
        programId: 1,
      },
      {
        name: 'programUpdate 2',
        resolution: '123123',
        programId: 2,
      },
      // Add more Acredition data as needed
    ]

    // Seed data for qualifiedRegistry
    const selfAssessmentData = [
      {
        name: 'selfAssessment 1',
        resolution: '123123',

        programId: 1,
      },
      {
        name: 'selfAssessment 2',
        resolution: '123123',
        programId: 2,
      },
    ]
    // Seed data for Document
    const documentData = [
      {
        name: 'Document Acredition 1',
        url: 'document1.pdf',
        acreditionId: 1,
      },
      {
        name: 'Document Acredition 2',
        url: 'document2.pdf',
        acreditionId: 2,
      },
      {
        name: 'Document qualifiedRegistry 1',
        url: 'document3.pdf',
        qualifiedRegistryId: 1,
      },
      {
        name: 'Document qualifiedRegistry 2',
        url: 'document4.pdf',
        qualifiedRegistryId: 2,
      },
      {
        name: 'Document programUpdate 1',
        url: 'document5.pdf',
        programUpdateId: 1,
      },
      {
        name: 'Document programUpdate 2',
        url: 'document6.pdf',
        programUpdateId: 2,
      },
      {
        name: 'Document selfAssessment 1',
        url: 'document7.pdf',
        selfAssessmentId: 1,
      },
      {
        name: 'Document selfAssessment 2',
        url: 'document8.pdf',
        selfAssessmentId: 2,
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
        roles: 'ADMIN',
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
      data: qualifiedRegistryData,
    })

    await db.programUpdate.createMany({
      data: programUpdateData,
    })

    await db.selfAssessment.createMany({
      data: selfAssessmentData,
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
