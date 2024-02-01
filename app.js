document.addEventListener('DOMContentLoaded', function () {
    var currencyToggle = document.getElementById('currencyToggle');
    var nairaToggle1 = document.getElementById('nairaToggle1');
    var dollarToggle1 = document.getElementById('dollarToggle1');

    var nairaToggle2 = document.getElementById('nairaToggle2');
    var dollarToggle2 = document.getElementById('dollarToggle2');

    var nairaToggle3 = document.getElementById('nairaToggle3');
    var dollarToggle3 = document.getElementById('dollarToggle3');

    var menuBtn = document.getElementById('menu-btn');
    var sideNav = document.getElementById('side-nav');
    var closeBtn = document.getElementById('close-btn');

    menuBtn.addEventListener('click', function () {
        sideNav.style.display = ('block');
    });

    closeBtn.addEventListener('click', function () {
        sideNav.style.display = ('none');
    });

    if (currencyToggle && nairaToggle1 && dollarToggle1 &&
         nairaToggle2 && dollarToggle2 &&
         nairaToggle3 && dollarToggle3) {

        currencyToggle.addEventListener('change', function () {
            handleToggle(currencyToggle, nairaToggle1, dollarToggle1);
        });

        currencyToggle.addEventListener('change', function () {
            handleToggle(currencyToggle, nairaToggle2, dollarToggle2);
        });

        currencyToggle.addEventListener('change', function () {
            handleToggle(currencyToggle, nairaToggle3, dollarToggle3);
        });

    } else {
        console.error('One or more elements not found');
    }

    function handleToggle(currencyToggle, nairaToggle, dollarToggle) {
        if (currencyToggle.checked) {
            // If checkbox is checked, show dollar and hide naira
            nairaToggle.style.display = 'none';
            dollarToggle.style.display = 'block';
        } else {
            // If checkbox is not checked, show naira and hide dollar
            nairaToggle.style.display = 'block';
            dollarToggle.style.display = 'none';
        }
    }
});
