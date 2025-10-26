
    (function(){
      const hamb = document.getElementById('hambBtn');
      const sidebar = document.getElementById('sidebar');
      const body = document.body;

      hamb.addEventListener('click', () => {
        const opened = sidebar.classList.toggle('open');
        sidebar.setAttribute('aria-hidden', !opened);
      });

      // close sidebar when clicking outside on small screens
      document.addEventListener('click', (e) => {
        if (window.innerWidth <= 1000) {
          if (!sidebar.contains(e.target) && !hamb.contains(e.target) && sidebar.classList.contains('open')) {
            sidebar.classList.remove('open');
            sidebar.setAttribute('aria-hidden', 'true');
          }
        }
      });

      // ensure sidebar visible on large screens, hidden on resize small
      window.addEventListener('resize', () => {
        if (window.innerWidth > 1000) {
          sidebar.classList.remove('open');
          sidebar.style.transform = '';
          sidebar.setAttribute('aria-hidden', 'false');
        } else {
          sidebar.setAttribute('aria-hidden', 'true');
        }
      });
    })();
