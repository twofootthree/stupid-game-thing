const canvas = document.getElementById('matrix');
            const context = canvas.getContext('2d');

            const canvas2 = document.getElementById('ch_text');
            const context2 = canvas2.getContext('2d');

            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            const sixtyfour = 'Y2hhcmlvdGNoYXJpb3RjaGFyaW90';
            const latin = 'chariotchariotchariot';
            const nums = '3811891520';

            const alphabet = sixtyfour + latin + nums;

            const fontSize = 16;
            const columns = canvas.width/fontSize;

            const rainDrops = [];

            for(let x = 0; x < columns; x++ ) {
                rainDrops[x] = 1;
            }

            const draw = () => {
                context.fillStyle = 'rgba(0, 0, 0, 0.05)';
                context.fillRect(0, 0, canvas.width, canvas.height);

                context.fillStyle = '#0F0';
                context.font = fontSize + 'px monospace';

                

                for(let i = 0; i < rainDrops.length; i++) 
                {
                    const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
                    context.fillText(text, i*fontSize, rainDrops[i]*fontSize);

                    if(rainDrops[i]*fontSize > canvas.height && Math.random() > 0.975) {
                        rainDrops[i] = 0;
                    }
                    rainDrops[i]++;
                }

                const w = canvas.width/2;
                const h = canvas.height/2;
                context.globalCompositeOperation = "source-over";
                context.fillStyle = '#FFF';
                context.shadowColor = "rgba(255, 255, 255, 0.2)";
                context.shadowBlur = 7;
                context.font = "100px monospace";
                context.textAlign = "center";
                context.fillText("{ chariot }", w, h);
                context.font = "20px monospace";
                context.fillText(". press space to start .", w, h + 70);
            }
            

            setInterval(draw, 30);
