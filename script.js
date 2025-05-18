window.onload = function() {
    let btnWebsiteCreation = document.querySelector('#website-creation');
    let websiteContent = document.querySelector('#website-content');

    let btnCustomScripts = document.querySelector('#custom-scripts');
    let scriptContent = document.querySelector('#script-content');

    btnWebsiteCreation.addEventListener('click', function() {
        btnWebsiteCreation.style.display = 'none';

        const contentContainer = document.createElement('div');
        contentContainer.className = 'content-container';

        const img = document.createElement('img');
        img.src = 'pictures/website-creation.jpg';
        img.alt = 'website-example';
        img.className = 'website-creation-image';
        img.style.maxWidth = '40%';
        img.style.height = 'auto';

        const p1 = document.createElement('p');
        p1.textContent = "I can help you build a website, whether it's for personal use, business, or otherwise. Can also work on hosting/domain questions, and solving any problems";
        p1.className = 'js-p-tags-creation';

        const hideButton1 = document.createElement('button');
        hideButton1.textContent = "Hide";
        hideButton1.className = "hide-button";
        hideButton1.addEventListener('click', function() {
            websiteContent.innerHTML = '';
            btnWebsiteCreation.style.display = 'inline-block';
        });

        websiteContent.appendChild(img);
        websiteContent.appendChild(contentContainer);
        contentContainer.appendChild(p1);
        contentContainer.appendChild(hideButton1);
    });

    btnCustomScripts.addEventListener('click', function() {
        btnCustomScripts.style.display = 'none';

        const contentContainer = document.createElement('div');
        contentContainer.className = 'content-container';

        const img = document.createElement('img');
        img.src = 'pictures/custom-script-creation.jpg';
        img.alt = 'script-example';
        img.className = 'script-creation-image';
        img.style.maxWidth = '40%';
        img.style.height = 'auto';

        const p1 = document.createElement('p');
        p1.textContent = "Custom scripts can be created to automate boring tasks. This can include keeping track and logging prices, invoices, etc.";
        p1.className = 'js-p-tags-creation';

        const hideButton2 = document.createElement('button');
        hideButton2.textContent = "Hide";
        hideButton2.className = "hide-button";

        hideButton2.addEventListener('click', function() {
            scriptContent.innerHTML = '';
            btnCustomScripts.style.display = 'inline-block';
        });

        scriptContent.appendChild(img);
        scriptContent.appendChild(contentContainer);
        contentContainer.appendChild(p1);
        contentContainer.appendChild(hideButton2);
    });

    
}

/*window.onload = function() {
    const websiteDiv = document.querySelector('.website-creation');
    const scriptsDiv = document.querySelector('.custom-scripts');

    function showWebsite() {
        websiteDiv.innerHTML = '';
        const content = document.createElement('div');
        content.classList.add('service-content');
        content.innerHTML = `
        <h3>Website Creation</h3>
        <p>I can build responsive, accessible websites with HTML/CSS, and Javascript.</p>
        <p>Can provided guidance with hosting and domain problems/questions.</p>
        <button class="hide-button">Hide</button>
        `;
        content.querySelector('button').addEventListener('click', () => reset('website'));
        websiteDiv.appendChild(content);
        updateLayout();
    }

    function showScripts() {
        scriptsDiv.innerHTML = '';
        const content = document.createElement('div');
        content.classList.add('service-content');
        content.innerHTML = `
        <h3>Custom Scripts</h3>
        <p>I can write scripts in Python/JS to automate boring tasks, process data, and more</p>
        <button class="hide-button">Hide</button>
        `;
        content.querySelector('button').addEventListener('click', () => reset('scripts'));
        scriptsDiv.appendChild(content);
        updateLayout();
    }

    function reset(type) {
        if (type === 'website') {
            websiteDiv.innerHTML = `<button id="show-website" class="service-button">Website Creation</button>`;
        }
        else {
            scriptsDiv.innerHTML = `<button id="show-scripts" class="service-button">Custom Scripts</button>`;
        }
        rebind();
        updateLayout();
    }

    function updateLayout() {
        const websiteOpen = websiteDiv.querySelector('.service-content');
        const scriptsOpen = scriptsDiv.querySelector('.service-content');

        websiteDiv.style.flex = '1';
        scriptsDiv.style.flex = '1';

        websiteDiv.style.justifyContent = websiteOpen ? 'flex-start' : 'center';
        scriptsDiv.style.justifyContent = scriptsOpen ? 'flex-start' : 'center';
    }

    function rebind() {
        document.getElementById('show-website')?.addEventListener('click', showWebsite);
        document.getElementById('show-scripts')?.addEventListener('click', showScripts);
    }

    rebind();
};*/