<template>
    <div>
        <Transition name="slide-fade-right" appear>
            <div id="block-title-employee" class="block-title"><h1>Voor de werknemer</h1></div>
        </Transition>
        <div class="block-row">
            <Transition style="transition-delay: 0.5s" name="slide-fade-right" appear>
                <div class="block-employee">
                    <h2>Elk type fiets & merk</h2>
                    <div class = "content">
                        <p>Het grootste aanbod van Nederland. Keuze uit alle type fietsen van meer dan 250 merken bij ruim 1.500 lokaal aangesloten fietsenwinkels</p>
                    </div>
                </div>
            </Transition>
            <Transition style="transition-delay: 0.75s" name="slide-fade-right" appear>
                <div class="block-employee">
                    <h2>Lokaal dealer netwerk</h2>
                    <div class = "content">
                        <p>Kies de fiets bij u om de hoek. Bij de fietsenwinkel kiest u uw leasefiets uit en u kunt er ook al het onderhoud laten verrichten.</p>
                    </div>
                </div>
            </Transition>
            <Transition style="transition-delay: 1s" name="slide-fade-right" appear>
                <div class="block-employee">
                    <h2>All-in-leaseprijs</h2>
                    <div class = "content">
                        <p>Onbezorgd onderweg. Uw leasefiets is altijd inclusief onderhoud, verzekering en 24/7 pechhulp.</p>
                    </div>
                </div>
            </Transition>
        </div>
        <Transition style="transition-delay: 1.25s" name="slide-fade-right" appear>
            <div class="block-title"><h1>Voor de werkgever</h1></div>
        </Transition>
        <div class="block-row">
            <Transition style="transition-delay: 1.5s" name="slide-fade-left" appear>
                <div class="block">
                    <h2>Gewilde arbeidsvoorwaarde</h2>
                    <div class = "content">
                        <p>1 op de 2 werknemers heeft interesse in een fiets van de zaak. De fiets is de meest gevraagde secundaire 
                            arbeidsvoorwaarde in Nederland! De leasefiets is zonder kosten en buiten de Werkkostenregeling (WKR).</p>
                    </div>
                </div>
            </Transition>
            <Transition style="transition-delay: 1.75s" name="slide-fade-left" appear>
                <div class="block">
                    <h2>Financieel aantrekkelijk</h2>
                    <div class = "content">
                        <p>Een fiets zakelijk leasen is 25% tot 80% goedkoper voor uw werknemers dan privé kopen. U bespaart tot wel 20% op de sociale lasten.</p>
                    </div>
                </div>
            </Transition>
            <Transition style="transition-delay: 2s" name="slide-fade-left" appear>
                <div class="block">
                    <h2>Verlagend ziekteverzuim</h2>
                    <div class = "content">
                        <p>Fietsen houdt werknemers gezond en verlaagt het ziekteverzuim tot 25%. 70% van de werknemers met een leasefiets fietst vaker en verder. 
                            6 Op de 10 rapporteert zich fitter te voelen.</p>
                    </div>
                </div>
            </Transition>
        </div>
        <Transition style="transition-delay: 2.25s" name="slide-fade-right" appear>
            <div class="block-title"><h1>Voor de ZZP'er</h1></div>
        </Transition>
        <div class="block-row">
            <Transition style="transition-delay: 2.5s" name="slide-fade-right" appear>
                <div class="block-zzp">
                    <h2>Besparing</h2>
                    <div class = "content">
                        <p>Het maandelijkse leasebedrag voor uw fiets van de zaak is een bedrijfsuitgave die u van de jaarlijkse winst af mag trekken. 
                           Dit levert belastingvoordeel op. Met lease bespaart u minimaal 35% op de winkelprijs van de fiets.</p>
                    </div>
                </div>
            </Transition>
            <Transition style="transition-delay: 2.75s" name="slide-fade-right" appear>
                <div class="block-zzp">
                    <h2>Zorgeloos de weg op</h2>
                    <div class = "content">
                        <p>Geen zorgen over onvoorziene kosten. Uw fietsplan omvat verzekering, onderhoud en 24/7 pechhulp. We staan altijd voor u klaar.</p>
                    </div>
                </div>
            </Transition>
            <Transition style="transition-delay: 3s" name="slide-fade-right" appear>
                <div class="block-zzp">
                    <h2>Overname fiets</h2>
                    <div class = "content">
                        <p>Wilt u verder fietsen na de leasetermijn? Geen probleem! U neemt uw leasefiets voor circa 20% voordelig over.</p>
                    </div>
                </div>
            </Transition>
        </div>
    </div>
  </template>
  
  <script>
    export default {
        name: 'lease',
    }
  </script>
  
  <style scoped>
    .block-row {
       display: flex;
    }

    h1 {
        margin: 0;
    }

    #blocks p {
        text-align: justify;
    }

    .block-title {
        text-align: left;
        padding-left: 3.5%;
    }
    #block-title-employee {
        padding-top: 24px;
    }

    .block, .block-employee, .block-zzp {
        flex: 1;
        display: flex;
        flex-direction: column;
        margin: 2.25%;
        border: 3px solid #d61a67;
        background-color: rgba(0, 0, 0, 0.45);
        border-radius: 20px;
        height: 225px;
    }
    .block-employee {
        border-color: #ff8647;
    }
    .block-zzp {
        border-color: #600026;
    }
    .block h2 {
        flex: 1;
    }

    .content {
        flex: 2;
        padding: 16px;
    }
  </style>