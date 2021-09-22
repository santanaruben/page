module.exports = {
    colocar: function() {
        document.getElementById('content').classList.add('blurring');
        document.getElementById('loader').classList.add('loader');
    },
    quitar: function() {
        setTimeout(function() {
            document.getElementById('loader').classList.remove('loader');
            document.getElementById('content').classList.remove('blurring');
        },800);
    },
    colocarInicio: function() {
        document.getElementById('contentInicio').classList.add('blurring');
        document.getElementById('loaderInicio').classList.add('loader');
    },
    quitarInicio: function() {
        document.getElementById('loaderInicio').classList.remove('loader');
        document.getElementById('contentInicio').classList.remove('blurring');
    }
};