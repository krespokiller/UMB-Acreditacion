export const standard = defineScenario({
  programOfStudy: {
    one: {
      data: {
        name: 'Ingenieria Industrial',

        image: 'String',
        description: 'String',
        carrerType: 'TECNICO',
        acredition: {
          create: {
            name: 'Acredition 1',
            resolution: 'String',
            documents: {
              create: {
                name: 'Document acredition 1',
                url: 'String',
              },
            },
          },
        },
        selfAssessment: {
          create: {
            name: 'selfAssessment 1',
            resolution: 'String',
            documents: {
              create: {
                name: 'Document selfAssessment 1',
                url: 'String',
              },
            },
          },
        },
        programUpdate: {
          create: {
            name: 'programUpdate 1',
            resolution: 'String',
            documents: {
              create: {
                name: 'Document programUpdate 1',
                url: 'String',
              },
            },
          },
        },
        qualifiedRegistry: {
          create: {
            name: 'qualifiedRegistry 1',
            resolution: 'String',
            documents: {
              create: {
                name: 'Document qualifiedRegistry 1',
                url: 'String',
              },
            },
          },
        },
      },
    },
    two: {
      data: {
        name: 'Ingenieria de Software',

        image: 'String',
        description: 'String',
        carrerType: 'TECNICO',
      },
    },
    three: {
      data: {
        name: 'Medicina',

        image: 'String',
        description: 'String',
        carrerType: 'TECNICO',
      },
    },
    four: {
      data: {
        name: 'Enfermería',

        image: 'String',
        description: 'String',
        carrerType: 'TECNICO',
      },
    },
    five: {
      data: {
        name: 'Ingenieria Biomedica',

        image: 'String',
        description: 'String',
        carrerType: 'TECNICO',
      },
    },
    six: {
      data: {
        name: 'Arquitectura',

        image: 'String',
        description: 'String',
        carrerType: 'TECNICO',
      },
    },
    seven: {
      data: {
        name: 'Contabilidad',

        image: 'String',
        description: 'String',
        carrerType: 'TECNICO',
      },
    },
    eight: {
      data: {
        name: 'Derecho',

        image: 'String',
        description: 'String',
        carrerType: 'TECNICO',
      },
    },
    nine: {
      data: {
        name: 'Psicología',

        image: 'String',
        description: 'String',
        carrerType: 'TECNICO',
      },
    },
    ten: {
      data: {
        name: 'Biología',

        image: 'String',
        description: 'String',
        carrerType: 'TECNICO',
      },
    },
    // Add more examples as needed
  },
})
