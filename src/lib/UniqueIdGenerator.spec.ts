import * as UIG from './UniqueIdGenerator.min.js';

describe('UniqueIdGenerator', () => {

  it('Generiert eine eindeutige ID', () => {
    const ids: Array<string> = [];

    // Generiere 1000 ID's
    for (let i = 0; i < 1000; i++) {
      const newId: string = UIG.UniqueIdGenerator.generateId();

      // Prüfe ob die ID schon vorhanden ist
      ids.forEach(id => {
        expect(id).not.toBe(newId);
      });

      ids.push(newId);
    }
  });

  it('Der ID kann ein Präfix vorangestellt werden', () => {
    const id: string = UIG.UniqueIdGenerator.generateId('Test');

    expect(id.length).toBe(12); // 4 Zeichen + 8 Zeichen der ID
    expect(id.substring(0, 4)).toBe('Test'); // die ersten 4 Zeichen sind 'Test'
  });

  it('ID beinhaltet nur 8 alphanummerische Zeichen', () => {
    for (let i = 0; i < 1000; i++) {
      const id: string = UIG.UniqueIdGenerator.generateId();
      expect(id).toMatch(/[A-Za-z0-9]{8}/); // RegEx
    }
  });

});
