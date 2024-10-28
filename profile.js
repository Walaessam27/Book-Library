// document.getElementById('bookForm').addEventListener('submit', function(event) {
//     event.preventDefault(); // منع إعادة تحميل الصفحة

//     // الحصول على القيم من النموذج
//     const title = document.getElementById('bookTitle').value;
//     const author = document.getElementById('bookAuthor').value;
//     const genre = document.getElementById('bookGenre').value;

//     // إنشاء عنصر قائمة جديد
//     const listItem = document.createElement('li');
//     listItem.className = 'list-group-item';
//     listItem.textContent = `${title} - ${author} (${genre})`;

//     // إضافة العنصر إلى قائمة الكتب
//     document.getElementById('bookList').appendChild(listItem);

//     // إعادة تعيين النموذج
//     document.getElementById('bookForm').reset();
// });
