# kmom02

1. __Hur känns konceptet med Apache name-based Virtual Hosts? Känner du igen det sedan tidigare?__

Jag har använt en Virtual Host tidigare men fick aldrig någon riktigt förståelse för det.
Jag tror att jag hade inga problem med detta momentet och jag tror jag förstår ganska bra hur det fungerar.
Det som blev största missförståelsen var lite av att förstå kopplingen mellan den virituella hosten, och
till en början använde jag mig av namnet linx.dbwebb.se likt det stod i övningarna men sedan fick jag ändra
det till me.linux.se enligt uppgiften och då blev det till en början lite problem med SSH-nycklarna men jag
tror jag lyckades lösa det genom att logga in via localhost "2222" och skicka över en kopia på de uppdaterade
SSH-nycklarna till den virituella hosten. Det gav mig också en chans att genomföra övningsmomenten ännu en gång
så att jag lärde känna dem bättre.

2. __Det blir allt fler kommandon i terminalen, hur känns det med terminalen och dess kommandon?__

Det är ganska svårt och jag kände inte att jag fick jätte mycket hjälp utav "$ man ls" så jag googlade lite
vilket inte heller var särskilt lyckat det kändes som det var väldigt ont om information, så jag fick testa
mycket och försöka förstå men det jag skrev i labben var ändå ganska mycket följande manualen.
Däremot använde jag "| tac" i sista uppgiften för att den godkändes inte pga att svaren kom ut i fel ordning
så jag behövde vända på utskriften.

3. __Gick det bra med ssh-nycklar och rsync över ssh?__

Som sagt fick jag lite problem när jag gjorde det för andra gången men lyckades lösa det.
Däremot undrade jag lite över

"Skapa en Apache Virtual Host me.linux.se. Spara en kopia av
config-filen me.linux.se.conf i ditt kursrepo. Kontrollera att du kommer åt webbplatsen med din webbläsare."

Jag förstår inte direkt hur ni ville att jag skulle utföra denna så jag skapade bara en fil på min dator och
kopierade in det jag skrev i min VBox. Jag vet inte om det var så att jag skulle ha kopierat över filen från
VBoxen till min host-dator isåfall vet jag inte riktigt hur jag skulle göra det.

4. __Hur kändes det att jobba med tmux?__

tmux kändes okej. Har inte jätte mycket att säga om det just nu, vet inte om jag riktigt kom in i det ordentligt.
Jag skapade tb och tbs veriablerna för det verkade rimligt användbart.

5. __Reflektera över hur du känner inför Unix som operativsystem så här långt?__

Just nu känns allt ok. Men jag kan definitivt se hur saker kommer att bli mer komplicerade, jag försöker att göra
en del snapshots ifall saker börja trilla isär och jag försöker dokumentera de flesta av de kommandon jag utför i
terminalen.
