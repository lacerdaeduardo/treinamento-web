import lokijs from 'lokijs';

export default () => {
    var db = new lokijs('treinamento-web.db', {
        verbose: true,
        autosave: true,
        autoload: true
    });
    return db;
};