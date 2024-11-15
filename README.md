# Jak uruchomić aplikację

1. **Pobierz pliki z repozytorium**.
2. **Zainstaluj zależności**:

   Zainstaluj wszystkie wymagane zależności:
   Pobierz i zainstaluj node.js ze strony https://nodejs.org/en

   Zainstaluj moduł openai za pomocą komendy:
   ```bash
   npm install openai
   ```
   Zainstaluj moduł dotenv za pomocą komendy:
   ```bash
   npm install dotenv
   ```
   
4. W pliku .env wklej swój klucz api
5. Uruchom aplikację za pomocą komendy:
 ```bash
   node main.js
   ```
## Opis działania
Aplikacja umożliwia przetwarzanie tekstu zawartego w pliku article.txt, redagowanie go z użyciem API openAI oraz generowanie artykułu w formacie HTML. Ostateczny plik artykul.html jest przygotowany z uwzględnieniem określonych wytycznych.
