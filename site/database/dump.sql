-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1
-- Время создания: Апр 01 2021 г., 18:32
-- Версия сервера: 10.4.17-MariaDB
-- Версия PHP: 8.0.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `olx`
--

-- --------------------------------------------------------

--
-- Структура таблицы `categories`
--

CREATE TABLE `categories` (
  `id` int(10) UNSIGNED NOT NULL,
  `category_id` int(10) UNSIGNED DEFAULT NULL,
  `order` int(11) NOT NULL DEFAULT 1,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `categories`
--

INSERT INTO `categories` (`id`, `category_id`, `order`, `name`, `slug`, `created_at`, `updated_at`) VALUES
(3, NULL, 1, 'Недвижимость', 'nedvizhimost', '2021-03-05 07:29:38', '2021-03-05 07:29:38'),
(4, NULL, 1, 'Транспорт', 'transport', '2021-03-05 07:30:24', '2021-03-05 07:30:24'),
(5, 3, 2, 'Квартиры, комнаты', 'kvartiry-komnaty', '2021-03-05 07:34:56', '2021-03-05 07:34:56'),
(6, 3, 2, 'Дома', 'doma', '2021-03-05 07:35:36', '2021-03-05 07:35:36'),
(7, 3, 2, 'Земля', 'zemlya', '2021-03-05 07:35:53', '2021-03-05 07:35:53'),
(8, 3, 2, 'Коммерческая недвижимость', 'kommercheskaya-nedvizhimost', '2021-03-05 07:36:38', '2021-03-05 07:36:38'),
(9, 3, 2, 'Гаражи, парковки', 'garazhi-parkovki', '2021-03-05 07:37:05', '2021-03-05 07:37:30'),
(10, 3, 2, 'Посуточная аренда жилья', 'posutochnaya-arenda-zhilya', '2021-03-05 07:38:07', '2021-03-05 07:38:20'),
(11, 3, 2, 'Предложения от застройщиков', 'predlozheniya-ot-zastrojshikov', '2021-03-05 07:39:20', '2021-03-05 07:39:20'),
(12, 3, 2, 'Недвижимость за рубежом', 'nedvizhimost-za-rubezhom', '2021-03-05 07:39:59', '2021-03-05 07:39:59'),
(13, 5, 3, 'Долгосрочная аренда квартир, комнат', 'dolgosrochnaya-arenda-kvartir-komnat', '2021-03-05 07:40:46', '2021-03-05 07:40:46'),
(14, 5, 3, 'Продажа квартир, комнат', 'prodazha-kvartir-komnat', '2021-03-05 07:41:27', '2021-03-05 07:41:27'),
(15, 6, 4, 'Долгосрочная аренда домов', 'dolgosrochnaya-arenda-domov', '2021-03-05 07:42:11', '2021-03-05 07:42:11'),
(16, 6, 4, 'Продажа домов', 'prodazha-domov', '2021-03-05 07:42:35', '2021-03-05 07:42:35'),
(17, 7, 5, 'Аренда земли', 'arenda-zemli', '2021-03-05 07:43:28', '2021-03-05 07:43:28'),
(18, 7, 5, 'Продажа земли', 'prodazha-zemli', '2021-03-05 07:43:49', '2021-03-05 07:43:49'),
(19, 8, 6, 'Продажа коммерческой недвижимости', 'prodazha-kommercheskoj-nedvizhimosti', '2021-03-05 07:44:28', '2021-03-05 07:44:28'),
(20, 8, 6, 'Аренда коммерческой недвижимости', 'arenda-kommercheskoj-nedvizhimosti', '2021-03-05 07:45:11', '2021-03-05 07:45:11'),
(21, 9, 7, 'Аренда гаражей, парковок', 'arenda-garazhej-parkovok', '2021-03-05 07:46:15', '2021-03-05 07:46:15'),
(22, 9, 7, 'Продажа гаражей, парковок', 'prodazha-garazhej-parkovok', '2021-03-05 07:46:48', '2021-03-05 07:46:48'),
(23, 10, 8, 'Дома посуточно, почасово', 'doma-posutochno-pochasovo', '2021-03-05 07:47:54', '2021-03-05 07:47:54'),
(24, 10, 8, 'Квартиры посуточно, почасово', 'kvartiry-posutochno-pochasovo', '2021-03-05 07:48:35', '2021-03-05 07:48:35'),
(25, 10, 8, 'Комнаты посуточно, почасово', 'komnaty-posutochno-pochasovo', '2021-03-05 07:50:57', '2021-03-05 07:50:57'),
(26, 10, 8, 'Отели, базы отдыха', 'oteli-bazy-otdyha', '2021-03-05 07:51:26', '2021-03-05 07:51:26'),
(27, 10, 8, 'Хостелы, койко-места', 'hostely-kojko-mesta', '2021-03-05 07:53:07', '2021-03-05 07:53:07'),
(28, 10, 8, 'Предложения Туроператоров', 'predlozheniya-turoperatorov', '2021-03-05 07:53:57', '2021-03-05 07:53:57'),
(29, 11, 9, 'Квартиры от застройщиков (новостройки)', 'kvartiry-ot-zastrojshikov-novostrojki', '2021-03-05 07:55:05', '2021-03-05 07:55:05'),
(30, 11, 9, 'Дома от застройщиков (коттеджные городки)', 'doma-ot-zastrojshikov-kottedzhnye-gorodki', '2021-03-05 07:55:57', '2021-03-05 07:55:57'),
(31, 4, 10, 'Легковые автомобили', 'legkovye-avtomobili', '2021-03-05 08:03:16', '2021-03-05 08:03:16'),
(32, 4, 10, 'Грузовые автомобили', 'gruzovye-avtomobili', '2021-03-05 08:03:41', '2021-03-05 08:03:41'),
(33, 4, 10, 'Грузовики и спецтехника из Польши', 'gruzoviki-i-spectehnika-iz-polshi', '2021-03-05 08:04:16', '2021-03-05 08:04:16'),
(34, 4, 10, 'Автобусы', 'avtobusy', '2021-03-05 08:04:35', '2021-03-05 08:04:35'),
(35, 4, 10, 'Мото', 'moto', '2021-03-05 08:04:50', '2021-03-05 08:04:50'),
(36, 4, 10, 'Спецтехника', 'spectehnika', '2021-03-05 08:05:13', '2021-03-05 08:05:13'),
(37, 4, 10, 'Сельхозтехника', 'selhoztehnika', '2021-03-05 08:05:50', '2021-03-05 08:05:50'),
(38, 4, 10, 'Водный транспорт', 'vodnyj-transport', '2021-03-05 08:06:35', '2021-03-05 08:06:35'),
(39, 4, 10, 'Воздушный транспорт', 'vozdushnyj-transport', '2021-03-05 08:06:54', '2021-03-05 08:06:54'),
(40, 4, 10, 'Прицепы / дома на колесах', 'pricepy-doma-na-kolesah', '2021-03-05 08:07:35', '2021-03-05 08:07:35'),
(41, 4, 10, 'Другой транспорт', 'drugoj-transport', '2021-03-05 08:07:58', '2021-03-05 08:07:58'),
(42, 31, 11, 'Acura', 'acura', '2021-03-05 08:08:55', '2021-03-05 08:08:55'),
(43, 31, 11, 'Alfa Romeo', 'alfa-romeo', '2021-03-05 08:09:48', '2021-03-05 08:09:48'),
(44, 31, 11, 'Audi', 'audi', '2021-03-05 08:10:07', '2021-03-05 08:10:07'),
(45, 31, 11, 'Bentley', 'bentley', '2021-03-05 08:10:43', '2021-03-05 08:10:43'),
(46, 31, 11, 'BMW', 'bmw', '2021-03-05 08:11:04', '2021-03-05 08:11:04'),
(47, 31, 11, 'Brilliance', 'brilliance', '2021-03-05 08:11:38', '2021-03-05 08:11:38'),
(48, 31, 11, 'BYD', 'byd', '2021-03-05 08:11:58', '2021-03-05 08:11:58'),
(49, 31, 11, 'Cadillac', 'cadillac', '2021-03-05 08:12:36', '2021-03-05 08:12:36'),
(50, 31, 11, 'Chana', 'chana', '2021-03-05 08:13:03', '2021-03-05 08:13:03'),
(51, 31, 11, 'ChangFeng', 'changfeng', '2021-03-05 08:13:25', '2021-03-05 08:13:25'),
(52, 31, 11, 'Chery', 'chery', '2021-03-05 08:14:22', '2021-03-05 08:14:22'),
(53, 31, 11, 'Chevrolet', 'chevrolet', '2021-03-05 08:14:55', '2021-03-05 08:14:55'),
(54, 31, 11, 'Chrysler', 'chrysler', '2021-03-05 08:15:21', '2021-03-05 08:15:21'),
(55, 31, 11, 'Citroen', 'citroen', '2021-03-05 08:15:53', '2021-03-05 08:15:53'),
(56, 31, 11, 'Dacia', 'dacia', '2021-03-05 08:16:23', '2021-03-05 08:16:23'),
(57, 31, 11, 'Dadi', 'dadi', '2021-03-05 08:16:55', '2021-03-05 08:16:55'),
(58, 31, 11, 'Daewoo', 'daewoo', '2021-03-05 08:17:22', '2021-03-05 08:17:22'),
(59, 31, 11, 'Daihatsu', 'daihatsu', '2021-03-05 08:18:44', '2021-03-05 08:18:44'),
(60, 31, 11, 'Dodge', 'dodge', '2021-03-05 08:19:05', '2021-03-05 08:19:05'),
(61, 31, 11, 'Ferrari', 'ferrari', '2021-03-05 08:19:42', '2021-03-05 08:19:42'),
(62, 31, 11, 'Fiat', 'fiat', '2021-03-05 08:24:00', '2021-03-05 08:24:00'),
(63, 31, 11, 'Ford', 'ford', '2021-03-05 08:24:52', '2021-03-05 08:24:52'),
(64, 31, 11, 'Geely', 'geely', '2021-03-05 08:25:23', '2021-03-05 08:25:23'),
(65, 31, 11, 'GMC', 'gmc', '2021-03-05 08:26:05', '2021-03-05 08:26:05'),
(66, 31, 11, 'Great Wall', 'great-wall', '2021-03-05 08:27:41', '2021-03-05 08:27:41'),
(67, 31, 1, 'Honda', 'honda', '2021-03-05 08:28:00', '2021-03-05 08:28:00'),
(68, 31, 11, 'Hummer', 'hummer', '2021-03-05 08:28:31', '2021-03-05 08:28:31'),
(69, 31, 11, 'Hyundai', 'hyundai', '2021-03-05 08:29:12', '2021-03-05 08:29:12'),
(70, 31, 11, 'Infiniti', 'infiniti', '2021-03-05 08:29:33', '2021-03-05 08:29:33'),
(71, 31, 11, 'Isuzu', 'isuzu', '2021-03-05 08:29:54', '2021-03-05 08:29:54'),
(72, 31, 11, 'Iveco', 'iveco', '2021-03-05 08:30:25', '2021-03-05 08:30:25'),
(73, 31, 11, 'JAC', 'jac', '2021-03-05 08:31:01', '2021-03-05 08:31:01'),
(74, 31, 11, 'Jaguar', 'jaguar', '2021-03-05 08:31:22', '2021-03-05 08:31:22'),
(75, 31, 11, 'Jeep', 'jeep', '2021-03-05 08:31:56', '2021-03-05 08:31:56'),
(76, 31, 11, 'Kia', 'kia', '2021-03-05 08:32:19', '2021-03-05 08:32:19'),
(77, 31, 11, 'Lancia', 'lancia', '2021-03-05 08:32:57', '2021-03-05 08:32:57'),
(78, 31, 11, 'Land Rover', 'land-rover', '2021-03-05 08:33:22', '2021-03-05 08:33:22'),
(79, 31, 11, 'Lexus', 'lexus', '2021-03-05 08:34:22', '2021-03-05 08:34:22'),
(80, 31, 11, 'Lifan', 'lifan', '2021-03-05 08:34:50', '2021-03-05 08:34:50'),
(81, 31, 11, 'LincoIn', 'lincoin', '2021-03-05 08:35:15', '2021-03-05 08:35:15'),
(82, 31, 11, 'Masserati', 'masserati', '2021-03-05 08:35:52', '2021-03-05 08:35:52'),
(83, 31, 11, 'Mazda', 'mazda', '2021-03-05 08:36:14', '2021-03-05 08:36:14'),
(84, 31, 11, 'Mercedes-Benz', 'mercedes-benz', '2021-03-05 08:36:45', '2021-03-05 08:36:45'),
(85, 31, 11, 'MG', 'mg', '2021-03-05 08:37:19', '2021-03-05 08:37:19'),
(86, 31, 11, 'MINI', 'mini', '2021-03-05 08:37:35', '2021-03-05 08:37:35'),
(87, 31, 11, 'Mitsubishi', 'mitsubishi', '2021-03-05 08:38:06', '2021-03-05 08:38:06'),
(88, 31, 11, 'Nissan', 'nissan', '2021-03-05 08:38:47', '2021-03-05 08:38:47'),
(89, 31, 11, 'Oldsmobile', 'oldsmobile', '2021-03-05 08:39:17', '2021-03-05 08:39:17'),
(90, 31, 11, 'Opel', 'opel', '2021-03-05 08:39:41', '2021-03-05 08:39:41'),
(91, 31, 11, 'Peugeot', 'peugeot', '2021-03-05 08:40:04', '2021-03-05 08:40:04'),
(92, 31, 11, 'Pontiac', 'pontiac', '2021-03-05 08:42:30', '2021-03-05 08:42:30'),
(93, 31, 11, 'Porsche', 'porsche', '2021-03-05 08:42:52', '2021-03-05 08:42:52'),
(94, 31, 11, 'Ravon', 'ravon', '2021-03-05 08:43:15', '2021-03-05 08:43:15'),
(95, 31, 11, 'Renault', 'renault', '2021-03-05 08:43:42', '2021-03-05 08:43:42'),
(96, 31, 11, 'Roewe', 'roewe', '2021-03-05 08:44:06', '2021-03-05 08:44:06'),
(97, 31, 11, 'Rover', 'rover', '2021-03-05 08:44:45', '2021-03-05 08:44:45'),
(98, 31, 11, 'Saab', 'saab', '2021-03-05 08:45:08', '2021-03-05 08:45:08'),
(99, 31, 11, 'Samand', 'samand', '2021-03-05 08:45:27', '2021-03-05 08:45:27'),
(100, 31, 11, 'Seat', 'seat', '2021-03-05 08:45:54', '2021-03-05 08:45:54'),
(101, 31, 11, 'Skoda', 'skoda', '2021-03-05 08:46:09', '2021-03-05 08:46:09'),
(102, 31, 11, 'Smart', 'smart', '2021-03-05 08:46:40', '2021-03-05 08:46:40'),
(103, 31, 11, 'SsangYong', 'ssangyong', '2021-03-05 08:47:06', '2021-03-05 08:47:06'),
(104, 31, 11, 'Subaru', 'subaru', '2021-03-05 08:47:32', '2021-03-05 08:47:32'),
(105, 31, 11, 'Suzuki', 'suzuki', '2021-03-05 08:47:58', '2021-03-05 08:47:58'),
(106, 31, 11, 'Tesla', 'tesla', '2021-03-05 08:48:18', '2021-03-05 08:48:18'),
(107, 31, 11, 'Toyota', 'toyota', '2021-03-05 08:48:38', '2021-03-05 08:48:38'),
(108, 31, 11, 'Volkswagen', 'volkswagen', '2021-03-05 08:49:08', '2021-03-05 08:49:08'),
(109, 31, 11, 'Volvo', 'volvo', '2021-03-05 08:49:24', '2021-03-05 08:49:24'),
(110, 31, 11, 'Wartburg', 'wartburg', '2021-03-05 08:49:52', '2021-03-05 08:49:52'),
(111, 31, 11, 'ZX', 'zx', '2021-03-05 08:50:09', '2021-03-05 08:50:09'),
(112, 31, 11, 'Богдан', 'bogdan', '2021-03-05 08:50:40', '2021-03-05 08:50:40'),
(113, 31, 11, 'ВАЗ', 'vaz', '2021-03-05 08:51:02', '2021-03-05 08:51:02'),
(114, 31, 11, 'ГАЗ', 'gaz', '2021-03-05 08:51:17', '2021-03-05 08:51:17'),
(115, 31, 11, 'ЗАЗ', 'zaz', '2021-03-05 08:51:36', '2021-03-05 08:51:36'),
(116, 31, 11, 'ИЖ', 'izh', '2021-03-05 08:52:01', '2021-03-05 08:52:01'),
(117, 31, 11, 'ЛуАЗ', 'luaz', '2021-03-05 08:52:21', '2021-03-05 08:52:21'),
(118, 31, 11, 'Москвич / АЗЛК', 'moskvich-azlk', '2021-03-05 08:52:56', '2021-03-05 08:52:56'),
(119, 31, 11, 'РАФ', 'raf', '2021-03-05 08:53:18', '2021-03-05 08:53:18'),
(120, 31, 11, 'УАЗ', 'uaz', '2021-03-05 08:53:33', '2021-03-05 08:53:33'),
(121, 31, 11, 'Другие', 'drugie', '2021-03-05 08:53:46', '2021-03-05 08:53:46'),
(122, 33, 12, 'Грузовые автомобили из Польши', 'gruzovye-avtomobili-iz-polshi', '2021-03-05 08:56:13', '2021-03-05 08:56:13'),
(123, 33, 12, 'Прицепы из Польши', 'pricepy-iz-polshi', '2021-03-05 08:56:43', '2021-03-05 08:56:43'),
(124, 33, 12, 'Сельхозтехника из Польши', 'selhoztehnika-iz-polshi', '2021-03-05 08:57:18', '2021-03-05 08:57:18'),
(125, 33, 12, 'Строительная техника из Польши', 'stroitelnaya-tehnika-iz-polshi', '2021-03-05 08:57:53', '2021-03-05 08:57:53'),
(126, 35, 13, 'Мопеды / скутеры', 'mopedy-skutery', '2021-03-05 08:58:22', '2021-03-05 08:58:22'),
(127, 35, 13, 'Квадроциклы', 'kvadrocikly', '2021-03-05 08:58:43', '2021-03-05 08:58:43'),
(128, 35, 13, 'Мотоциклы', 'motocikly', '2021-03-05 08:59:01', '2021-03-05 08:59:01'),
(129, 35, 13, 'Мото - прочее', 'moto-prochee', '2021-03-05 08:59:28', '2021-03-05 08:59:28'),
(130, 36, 14, 'Бульдозеры / тракторы', 'buldozery-traktory', '2021-03-05 09:00:08', '2021-03-05 09:00:08'),
(131, 36, 14, 'Коммунальная техника', 'kommunalnaya-tehnika', '2021-03-05 09:00:33', '2021-03-05 09:00:33'),
(132, 36, 14, 'Погрузчики', 'pogruzchiki', '2021-03-05 09:00:58', '2021-03-05 09:00:58'),
(133, 36, 14, 'Самосвалы', 'samosvaly', '2021-03-05 09:01:16', '2021-03-05 09:01:16'),
(134, 36, 14, 'Строительная техника', 'stroitelnaya-tehnika', '2021-03-05 09:01:44', '2021-03-05 09:01:44'),
(135, 36, 14, 'Экскаваторы', 'ekskavatory', '2021-03-05 09:02:01', '2021-03-05 09:02:01'),
(136, 36, 14, 'Оборудование для спецтехники', 'oborudovanie-dlya-spectehniki', '2021-03-05 09:02:41', '2021-03-05 09:02:41'),
(137, 36, 14, 'Прочая спецтехника', 'prochaya-spectehnika', '2021-03-05 09:03:10', '2021-03-05 09:03:10');

-- --------------------------------------------------------

--
-- Структура таблицы `citys`
--

CREATE TABLE `citys` (
  `id` int(11) UNSIGNED NOT NULL,
  `name` varchar(128) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `citys`
--

INSERT INTO `citys` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'Николаев', NULL, NULL),
(2, 'Одесса', NULL, NULL),
(3, 'Киев', NULL, NULL);

-- --------------------------------------------------------

--
-- Структура таблицы `data_rows`
--

CREATE TABLE `data_rows` (
  `id` int(10) UNSIGNED NOT NULL,
  `data_type_id` int(10) UNSIGNED NOT NULL,
  `field` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `display_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `required` tinyint(1) NOT NULL DEFAULT 0,
  `browse` tinyint(1) NOT NULL DEFAULT 1,
  `read` tinyint(1) NOT NULL DEFAULT 1,
  `edit` tinyint(1) NOT NULL DEFAULT 1,
  `add` tinyint(1) NOT NULL DEFAULT 1,
  `delete` tinyint(1) NOT NULL DEFAULT 1,
  `details` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `order` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `data_rows`
--

INSERT INTO `data_rows` (`id`, `data_type_id`, `field`, `type`, `display_name`, `required`, `browse`, `read`, `edit`, `add`, `delete`, `details`, `order`) VALUES
(1, 1, 'id', 'number', 'ID', 1, 0, 0, 0, 0, 0, NULL, 1),
(2, 1, 'name', 'text', 'Имя', 1, 1, 1, 1, 1, 1, NULL, 2),
(3, 1, 'email', 'text', 'Email', 1, 1, 1, 1, 1, 1, NULL, 3),
(4, 1, 'password', 'password', 'Пароль', 1, 0, 0, 1, 1, 0, NULL, 4),
(5, 1, 'remember_token', 'text', 'Токен восстановления', 0, 0, 0, 0, 0, 0, NULL, 5),
(6, 1, 'created_at', 'timestamp', 'Дата создания', 0, 1, 1, 0, 0, 0, NULL, 6),
(7, 1, 'updated_at', 'timestamp', 'Дата обновления', 0, 0, 0, 0, 0, 0, NULL, 7),
(8, 1, 'avatar', 'image', 'Аватар', 0, 1, 1, 1, 1, 1, NULL, 8),
(9, 1, 'user_belongsto_role_relationship', 'relationship', 'Роль', 0, 1, 1, 1, 1, 0, '{\"model\":\"TCG\\\\Voyager\\\\Models\\\\Role\",\"table\":\"roles\",\"type\":\"belongsTo\",\"column\":\"role_id\",\"key\":\"id\",\"label\":\"display_name\",\"pivot_table\":\"roles\",\"pivot\":0}', 10),
(10, 1, 'user_belongstomany_role_relationship', 'relationship', 'Roles', 0, 1, 1, 1, 1, 0, '{\"model\":\"TCG\\\\Voyager\\\\Models\\\\Role\",\"table\":\"roles\",\"type\":\"belongsToMany\",\"column\":\"id\",\"key\":\"id\",\"label\":\"display_name\",\"pivot_table\":\"user_roles\",\"pivot\":\"1\",\"taggable\":\"0\"}', 11),
(11, 1, 'settings', 'hidden', 'Settings', 0, 0, 0, 0, 0, 0, NULL, 12),
(12, 2, 'id', 'number', 'ID', 1, 0, 0, 0, 0, 0, NULL, 1),
(13, 2, 'name', 'text', 'Имя', 1, 1, 1, 1, 1, 1, NULL, 2),
(14, 2, 'created_at', 'timestamp', 'Дата создания', 0, 0, 0, 0, 0, 0, NULL, 3),
(15, 2, 'updated_at', 'timestamp', 'Дата обновления', 0, 0, 0, 0, 0, 0, NULL, 4),
(16, 3, 'id', 'number', 'ID', 1, 0, 0, 0, 0, 0, NULL, 1),
(17, 3, 'name', 'text', 'Имя', 1, 1, 1, 1, 1, 1, NULL, 2),
(18, 3, 'created_at', 'timestamp', 'Дата создания', 0, 0, 0, 0, 0, 0, NULL, 3),
(19, 3, 'updated_at', 'timestamp', 'Дата обновления', 0, 0, 0, 0, 0, 0, NULL, 4),
(20, 3, 'display_name', 'text', 'Отображаемое имя', 1, 1, 1, 1, 1, 1, NULL, 5),
(21, 1, 'role_id', 'text', 'Роль', 1, 1, 1, 1, 1, 1, NULL, 9),
(22, 4, 'id', 'number', 'ID', 1, 0, 0, 0, 0, 0, NULL, 1),
(23, 4, 'parent_id', 'select_dropdown', 'Родитель', 0, 0, 1, 1, 1, 1, '{\"default\":\"\",\"null\":\"\",\"options\":{\"\":\"-- None --\"},\"relationship\":{\"key\":\"id\",\"label\":\"name\"}}', 2),
(24, 4, 'order', 'text', 'Сортировка', 1, 1, 1, 1, 1, 1, '{\"default\":1}', 3),
(25, 4, 'name', 'text', 'Имя', 1, 1, 1, 1, 1, 1, NULL, 4),
(26, 4, 'slug', 'text', 'Slug (ЧПУ)', 1, 1, 1, 1, 1, 1, '{\"slugify\":{\"origin\":\"name\"}}', 5),
(27, 4, 'created_at', 'timestamp', 'Дата создания', 0, 0, 1, 0, 0, 0, NULL, 6),
(28, 4, 'updated_at', 'timestamp', 'Дата обновления', 0, 0, 0, 0, 0, 0, NULL, 7),
(29, 5, 'id', 'number', 'ID', 1, 0, 0, 0, 0, 0, NULL, 1),
(30, 5, 'author_id', 'text', 'Автор', 1, 0, 1, 1, 0, 1, NULL, 2),
(31, 5, 'category_id', 'text', 'Категория', 1, 0, 1, 1, 1, 0, NULL, 3),
(32, 5, 'title', 'text', 'Название', 1, 1, 1, 1, 1, 1, NULL, 4),
(33, 5, 'excerpt', 'text_area', 'Отрывок', 1, 0, 1, 1, 1, 1, NULL, 5),
(34, 5, 'body', 'rich_text_box', 'Содержимое', 1, 0, 1, 1, 1, 1, NULL, 6),
(35, 5, 'image', 'image', 'Изображение Статьи', 0, 1, 1, 1, 1, 1, '{\"resize\":{\"width\":\"1000\",\"height\":\"null\"},\"quality\":\"70%\",\"upsize\":true,\"thumbnails\":[{\"name\":\"medium\",\"scale\":\"50%\"},{\"name\":\"small\",\"scale\":\"25%\"},{\"name\":\"cropped\",\"crop\":{\"width\":\"300\",\"height\":\"250\"}}]}', 7),
(36, 5, 'slug', 'text', 'Slug (ЧПУ)', 1, 0, 1, 1, 1, 1, '{\"slugify\":{\"origin\":\"title\",\"forceUpdate\":true},\"validation\":{\"rule\":\"unique:posts,slug\"}}', 8),
(37, 5, 'meta_description', 'text_area', 'Meta Description', 1, 0, 1, 1, 1, 1, NULL, 9),
(38, 5, 'meta_keywords', 'text_area', 'Meta Keywords', 1, 0, 1, 1, 1, 1, NULL, 10),
(39, 5, 'status', 'select_dropdown', 'Статус', 1, 1, 1, 1, 1, 1, '{\"default\":\"DRAFT\",\"options\":{\"PUBLISHED\":\"published\",\"DRAFT\":\"draft\",\"PENDING\":\"pending\"}}', 11),
(40, 5, 'created_at', 'timestamp', 'Дата создания', 0, 1, 1, 0, 0, 0, NULL, 12),
(41, 5, 'updated_at', 'timestamp', 'Дата обновления', 0, 0, 0, 0, 0, 0, NULL, 13),
(42, 5, 'seo_title', 'text', 'SEO Название', 0, 1, 1, 1, 1, 1, NULL, 14),
(43, 5, 'featured', 'checkbox', 'Рекомендовано', 1, 1, 1, 1, 1, 1, NULL, 15),
(44, 6, 'id', 'number', 'ID', 1, 0, 0, 0, 0, 0, NULL, 1),
(45, 6, 'author_id', 'text', 'Автор', 1, 0, 0, 0, 0, 0, NULL, 2),
(46, 6, 'title', 'text', 'Название', 1, 1, 1, 1, 1, 1, NULL, 3),
(47, 6, 'excerpt', 'text_area', 'Отрывок', 1, 0, 1, 1, 1, 1, NULL, 4),
(48, 6, 'body', 'rich_text_box', 'Содержимое', 1, 0, 1, 1, 1, 1, NULL, 5),
(49, 6, 'slug', 'text', 'Slug (ЧПУ)', 1, 0, 1, 1, 1, 1, '{\"slugify\":{\"origin\":\"title\"},\"validation\":{\"rule\":\"unique:pages,slug\"}}', 6),
(50, 6, 'meta_description', 'text', 'Meta Description', 1, 0, 1, 1, 1, 1, NULL, 7),
(51, 6, 'meta_keywords', 'text', 'Meta Keywords', 1, 0, 1, 1, 1, 1, NULL, 8),
(52, 6, 'status', 'select_dropdown', 'Статус', 1, 1, 1, 1, 1, 1, '{\"default\":\"INACTIVE\",\"options\":{\"INACTIVE\":\"INACTIVE\",\"ACTIVE\":\"ACTIVE\"}}', 9),
(53, 6, 'created_at', 'timestamp', 'Дата создания', 1, 1, 1, 0, 0, 0, NULL, 10),
(54, 6, 'updated_at', 'timestamp', 'Дата обновления', 1, 0, 0, 0, 0, 0, NULL, 11),
(55, 6, 'image', 'image', 'Изображение Страницы', 0, 1, 1, 1, 1, 1, NULL, 12),
(56, 7, 'id', 'number', 'Id', 1, 0, 0, 0, 0, 0, '{}', 1),
(57, 7, 'title', 'text', 'Заголовок', 1, 1, 1, 1, 1, 1, '{}', 2),
(58, 7, 'body', 'text', 'Описание', 1, 1, 1, 1, 1, 1, '{}', 3),
(59, 7, 'author_id', 'number', 'Автор', 1, 0, 0, 0, 0, 0, '{}', 4),
(60, 7, 'category_id', 'number', 'Рубрика', 1, 0, 0, 0, 0, 0, '{}', 5),
(61, 7, 'slug', 'text', 'Ссылка', 1, 1, 1, 1, 1, 1, '{}', 6),
(62, 7, 'price', 'text', 'Цена', 1, 1, 1, 1, 1, 1, '{}', 7),
(63, 7, 'mainImage', 'image', 'Главное фото', 0, 1, 1, 1, 1, 1, '{}', 8),
(64, 7, 'status', 'select_dropdown', 'Статус', 1, 1, 1, 1, 1, 1, '{\"default\":\"PENDING\",\"options\":{\"PUBLISHED\":\"published\",\"DRAFT\":\"draft\",\"PENDING\":\"pending\"}}', 9),
(65, 7, 'deactivated_at', 'timestamp', 'Дата деактивации', 0, 1, 1, 1, 1, 1, '{}', 10),
(66, 7, 'created_at', 'timestamp', 'Дата создания', 0, 1, 1, 1, 0, 1, '{}', 11),
(67, 7, 'updated_at', 'timestamp', 'Дата обновления', 0, 0, 0, 0, 0, 0, '{}', 12),
(68, 7, 'entity_belongsto_category_relationship', 'relationship', 'Рубрика', 0, 1, 1, 1, 1, 1, '{\"model\":\"App\\\\Models\\\\Entity\",\"table\":\"categories\",\"type\":\"belongsTo\",\"column\":\"category_id\",\"key\":\"id\",\"label\":\"name\",\"pivot_table\":\"categories\",\"pivot\":\"0\",\"taggable\":\"0\"}', 13),
(69, 7, 'entity_belongsto_user_relationship', 'relationship', 'users', 0, 1, 1, 1, 1, 1, '{\"model\":\"App\\\\Models\\\\Entity\",\"table\":\"users\",\"type\":\"belongsTo\",\"column\":\"author_id\",\"key\":\"id\",\"label\":\"name\",\"pivot_table\":\"categories\",\"pivot\":\"0\",\"taggable\":\"0\"}', 14),
(71, 8, 'id', 'text', 'Id', 1, 0, 0, 0, 0, 0, '{}', 1),
(72, 8, 'post_id', 'text', 'Post Id', 1, 0, 1, 1, 1, 1, '{}', 2),
(73, 8, 'name', 'image', 'Название', 1, 1, 1, 1, 1, 1, '{}', 3),
(74, 8, 'created_at', 'timestamp', 'Created At', 0, 0, 1, 1, 0, 1, '{}', 4),
(75, 8, 'updated_at', 'timestamp', 'Updated At', 0, 0, 0, 0, 0, 0, '{}', 5),
(76, 8, 'image_belongsto_entity_relationship', 'relationship', 'Объявление', 0, 1, 1, 1, 1, 1, '{\"model\":\"App\\\\Models\\\\Image\",\"table\":\"entities\",\"type\":\"belongsTo\",\"column\":\"post_id\",\"key\":\"id\",\"label\":\"title\",\"pivot_table\":\"categories\",\"pivot\":\"0\",\"taggable\":\"0\"}', 6);

-- --------------------------------------------------------

--
-- Структура таблицы `data_types`
--

CREATE TABLE `data_types` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `display_name_singular` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `display_name_plural` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `icon` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `model_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `policy_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `controller` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `generate_permissions` tinyint(1) NOT NULL DEFAULT 0,
  `server_side` tinyint(4) NOT NULL DEFAULT 0,
  `details` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `data_types`
--

INSERT INTO `data_types` (`id`, `name`, `slug`, `display_name_singular`, `display_name_plural`, `icon`, `model_name`, `policy_name`, `controller`, `description`, `generate_permissions`, `server_side`, `details`, `created_at`, `updated_at`) VALUES
(1, 'users', 'users', 'Пользователь', 'Пользователи', 'voyager-person', 'TCG\\Voyager\\Models\\User', 'TCG\\Voyager\\Policies\\UserPolicy', 'TCG\\Voyager\\Http\\Controllers\\VoyagerUserController', '', 1, 0, NULL, '2021-03-20 07:59:54', '2021-03-20 07:59:54'),
(2, 'menus', 'menus', 'Меню', 'Меню', 'voyager-list', 'TCG\\Voyager\\Models\\Menu', NULL, '', '', 1, 0, NULL, '2021-03-20 07:59:54', '2021-03-20 07:59:54'),
(3, 'roles', 'roles', 'Роль', 'Роли', 'voyager-lock', 'TCG\\Voyager\\Models\\Role', NULL, 'TCG\\Voyager\\Http\\Controllers\\VoyagerRoleController', '', 1, 0, NULL, '2021-03-20 07:59:54', '2021-03-20 07:59:54'),
(4, 'categories', 'categories', 'Категория', 'Категории', 'voyager-categories', 'TCG\\Voyager\\Models\\Category', NULL, '', '', 1, 0, NULL, '2021-03-20 07:59:59', '2021-03-20 07:59:59'),
(5, 'posts', 'posts', 'Статья', 'Статьи', 'voyager-news', 'TCG\\Voyager\\Models\\Post', 'TCG\\Voyager\\Policies\\PostPolicy', '', '', 1, 0, NULL, '2021-03-20 08:00:00', '2021-03-20 08:00:00'),
(6, 'pages', 'pages', 'Страница', 'Страницы', 'voyager-file-text', 'TCG\\Voyager\\Models\\Page', NULL, '', '', 1, 0, NULL, '2021-03-20 08:00:01', '2021-03-20 08:00:01'),
(7, 'entities', 'entities', 'Объявление', 'Объявления', NULL, 'App\\Models\\Entity', NULL, NULL, NULL, 1, 0, '{\"order_column\":null,\"order_display_column\":null,\"order_direction\":\"asc\",\"default_search_key\":null,\"scope\":null}', '2021-03-26 12:37:57', '2021-03-26 13:27:01'),
(8, 'images', 'images', 'Фотография', 'Фотографии', NULL, 'App\\Models\\Image', NULL, NULL, NULL, 1, 0, '{\"order_column\":null,\"order_display_column\":null,\"order_direction\":\"asc\",\"default_search_key\":null,\"scope\":null}', '2021-03-28 10:07:29', '2021-03-28 10:09:48');

-- --------------------------------------------------------

--
-- Структура таблицы `entities`
--

CREATE TABLE `entities` (
  `id` int(10) UNSIGNED NOT NULL,
  `title` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `body` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `author_id` bigint(20) UNSIGNED NOT NULL DEFAULT 1,
  `category_id` int(10) UNSIGNED NOT NULL,
  `slug` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` float NOT NULL,
  `mainImage` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` enum('PUBLISHED','PENDING','DRAFT','') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'PENDING',
  `visited` int(11) NOT NULL DEFAULT 0,
  `visited_tel` int(11) NOT NULL DEFAULT 0,
  `city_id` int(11) NOT NULL DEFAULT 1,
  `deactivated_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `entities`
--

INSERT INTO `entities` (`id`, `title`, `body`, `author_id`, `category_id`, `slug`, `price`, `mainImage`, `status`, `visited`, `visited_tel`, `city_id`, `deactivated_at`, `created_at`, `updated_at`) VALUES
(4, 'Заголовок объявления', 'Описание заголовка объявления Описание заголовка объявления', 2, 3, 'zagolovok-obyavleniya', 234345, '/storage/Images/Posts/hribei7JJb05MnROnLZE7QS4X87LHw30VfwFvViS.jpg', 'PUBLISHED', 37, 0, 1, '2021-04-22 21:00:00', '2021-03-26 12:59:00', '2021-04-01 13:11:13'),
(7, 'PENDINGPENDINGPENDING', 'PENDINGPENDINGPENDINGPENDINGPENDINGPENDINGPENDINGPENDING', 2, 4, 'pendingpendingpending', 43445300, '/storage/Images/Posts/xVxd48So12DbLuBFR6CLMJbZHH0FMDxikn7dCa32.jpg', 'PUBLISHED', 10, 0, 2, '2021-03-30 21:30:00', '2021-03-26 13:29:00', '2021-04-01 13:11:23'),
(8, 'Тестовое объявление', 'Тестовое объявление Тестовое объявление Тестовое объявление Тестовое объявление', 2, 44, 'testovoe-obyavlenie', 23500, '/storage/Images/Posts/VYarhHlyoGG5Kx5CH1bk9O1vGyoxNPJlKjpkFVoM.jpg', 'PENDING', 0, 0, 1, '2021-04-28 21:00:00', '2021-03-30 05:23:47', '2021-03-30 05:23:47'),
(9, 'Тестовое объявление', 'Тестовое объявление Тестовое объявление Тестовое объявление Тестовое объявление Тестовое объявление', 2, 44, 'testovoe-obyavlenie', 23500, '/storage/Images/Posts/1FkUpiOSwgVN9VT4Odbo5AdoaJIPQ13MQYLwoDfr.jpg', 'PENDING', 0, 0, 1, '2021-04-28 21:00:00', '2021-03-30 05:28:43', '2021-03-30 05:28:43'),
(10, 'Тестовое объявление 2', 'Тестовое объявление 2 Тестовое объявление Тестовое объявление Тестовое объявление', 2, 15, 'testovoe-obyavlenie-2', 3245, '/storage/Images/Posts/9mf4vdJCTJHyUfRC4jTexHefibyVRHS8ocb9dzpl.jpg', 'PENDING', 0, 0, 1, '2021-04-28 21:00:00', '2021-03-30 05:30:01', '2021-03-30 05:30:01'),
(11, 'Тестовое объявление 3', 'Тестовое объявление Тестовое объявление Тестовое объявление Тестовое объявление', 2, 14, 'testovoe-obyavlenie-3', 2345, '/storage/Images/Posts/WXPZeRmEYrXxPZfMby6ab6DCr0Skk4udv6yzuv45.jpg', 'PENDING', 0, 0, 1, '2021-04-28 21:00:00', '2021-03-30 05:30:51', '2021-03-30 05:30:51'),
(12, 'Тестовое объявление 5', 'Тестовое объявление 5Тестовое объявление 5Тестовое объявление 5Тестовое объявление 5', 2, 131, 'testovoe-obyavlenie-5', 46546500, '/storage/Images/Posts/EKQ9FfEUWSr02OiT4VeN0kzHFhQhx8Vtii8atVFz.jpg', 'PUBLISHED', 4, 0, 1, '2021-04-28 21:00:00', '2021-03-30 05:51:00', '2021-04-01 13:11:27'),
(13, 'Слон серый ушастый1', 'Замечательный серый слон с большими ушами1', 1, 12, 'slon-seryi-usastyi', 10001, '/storage/Images/Posts/o7p8IyJ28JiaeRxWvdpVztaSOkw7ONBQOXOD80CC.jpg', 'PUBLISHED', 20, 0, 1, '2021-04-28 21:00:00', '2021-03-30 06:43:00', '2021-04-01 13:16:31');

-- --------------------------------------------------------

--
-- Структура таблицы `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `favorites`
--

CREATE TABLE `favorites` (
  `id` int(10) UNSIGNED NOT NULL,
  `entity_id` int(10) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `favorites`
--

INSERT INTO `favorites` (`id`, `entity_id`, `user_id`, `created_at`, `updated_at`) VALUES
(1, 13, 2, NULL, NULL),
(2, 4, 2, '2021-03-31 05:19:20', '2021-03-31 05:19:20');

-- --------------------------------------------------------

--
-- Структура таблицы `images`
--

CREATE TABLE `images` (
  `id` int(11) NOT NULL,
  `post_id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `images`
--

INSERT INTO `images` (`id`, `post_id`, `name`, `created_at`, `updated_at`) VALUES
(12, 4, '/storage/Images/Posts/YxdCZ5ihRSNweGkftK8wzWhaxtpzDlg5QbMWcNnn.jpg', '2021-03-26 12:59:37', '2021-03-26 12:59:37'),
(13, 4, '/storage/Images/Posts/kEdxeF46nvFX1ETofDV3v4JvaTGoPIanwfl7bbZW.jpg', '2021-03-26 12:59:37', '2021-03-26 12:59:37'),
(14, 8, '/storage/Images/Posts/s5VMgFcP78Cs6aPpAwen5f38U03UC3Ol7yi1UARS.jpg', '2021-03-30 05:23:47', '2021-03-30 05:23:47'),
(15, 9, '/storage/Images/Posts/CXFhoNGGR8AR1lyQCzJaig86WpUznBCpl4fvg3Lq.jpg', '2021-03-30 05:28:43', '2021-03-30 05:28:43'),
(16, 10, '/storage/Images/Posts/lyszgMnFYvUqyRI4K8EW6sPGCORBPLSbsmAhYFpK.jpg', '2021-03-30 05:30:01', '2021-03-30 05:30:01');

-- --------------------------------------------------------

--
-- Структура таблицы `menus`
--

CREATE TABLE `menus` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `menus`
--

INSERT INTO `menus` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'admin', '2021-03-20 07:59:55', '2021-03-20 07:59:55');

-- --------------------------------------------------------

--
-- Структура таблицы `menu_items`
--

CREATE TABLE `menu_items` (
  `id` int(10) UNSIGNED NOT NULL,
  `menu_id` int(10) UNSIGNED DEFAULT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `url` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `target` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '_self',
  `icon_class` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `color` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `parent_id` int(11) DEFAULT NULL,
  `order` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `route` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `parameters` text COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `menu_items`
--

INSERT INTO `menu_items` (`id`, `menu_id`, `title`, `url`, `target`, `icon_class`, `color`, `parent_id`, `order`, `created_at`, `updated_at`, `route`, `parameters`) VALUES
(1, 1, 'Панель управления', '', '_self', 'voyager-boat', NULL, NULL, 1, '2021-03-20 07:59:56', '2021-03-20 07:59:56', 'voyager.dashboard', NULL),
(2, 1, 'Медиа', '', '_self', 'voyager-images', NULL, NULL, 4, '2021-03-20 07:59:56', '2021-03-26 12:41:22', 'voyager.media.index', NULL),
(3, 1, 'Пользователи', '', '_self', 'voyager-person', NULL, NULL, 3, '2021-03-20 07:59:56', '2021-03-20 07:59:56', 'voyager.users.index', NULL),
(4, 1, 'Роли', '', '_self', 'voyager-lock', NULL, NULL, 2, '2021-03-20 07:59:56', '2021-03-20 07:59:56', 'voyager.roles.index', NULL),
(5, 1, 'Инструменты', '', '_self', 'voyager-tools', NULL, NULL, 7, '2021-03-20 07:59:56', '2021-03-26 13:17:12', NULL, NULL),
(6, 1, 'Конструктор Меню', '', '_self', 'voyager-list', NULL, 5, 1, '2021-03-20 07:59:56', '2021-03-26 12:41:22', 'voyager.menus.index', NULL),
(7, 1, 'База данных', '', '_self', 'voyager-data', NULL, 5, 2, '2021-03-20 07:59:56', '2021-03-26 12:41:22', 'voyager.database.index', NULL),
(8, 1, 'Compass', '', '_self', 'voyager-compass', NULL, 5, 3, '2021-03-20 07:59:56', '2021-03-26 12:41:22', 'voyager.compass.index', NULL),
(9, 1, 'BREAD', '', '_self', 'voyager-bread', NULL, 5, 4, '2021-03-20 07:59:56', '2021-03-26 12:41:22', 'voyager.bread.index', NULL),
(10, 1, 'Настройки', '', '_self', 'voyager-settings', NULL, NULL, 9, '2021-03-20 07:59:56', '2021-03-26 13:17:12', 'voyager.settings.index', NULL),
(11, 1, 'Категории', '', '_self', 'voyager-categories', NULL, NULL, 6, '2021-03-20 07:59:59', '2021-03-26 13:17:12', 'voyager.categories.index', NULL),
(14, 1, 'Hooks', '', '_self', 'voyager-hook', NULL, NULL, 8, '2021-03-20 08:00:04', '2021-03-26 13:17:12', 'voyager.hooks', NULL),
(15, 1, 'Объявления', '', '_self', 'voyager-news', '#000000', NULL, 5, '2021-03-26 12:37:58', '2021-03-26 13:17:12', 'voyager.entities.index', 'null'),
(16, 1, 'Фотографии', '', '_self', NULL, NULL, NULL, 10, '2021-03-28 10:07:30', '2021-03-28 10:07:30', 'voyager.images.index', NULL);

-- --------------------------------------------------------

--
-- Структура таблицы `messages`
--

CREATE TABLE `messages` (
  `id` int(10) UNSIGNED NOT NULL,
  `from_id` bigint(20) UNSIGNED NOT NULL,
  `entity_id` int(10) UNSIGNED NOT NULL,
  `body` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `to_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `messages`
--

INSERT INTO `messages` (`id`, `from_id`, `entity_id`, `body`, `created_at`, `updated_at`, `to_id`) VALUES
(1, 2, 13, 'тестовое сообщение', '2021-04-01 13:11:46', '2021-04-01 13:11:46', 1),
(2, 2, 13, 'тестовое сообщение 2', '2021-04-01 13:16:48', '2021-04-01 13:16:48', 1);

-- --------------------------------------------------------

--
-- Структура таблицы `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2016_01_01_000000_add_voyager_user_fields', 1),
(4, '2016_01_01_000000_create_data_types_table', 1),
(5, '2016_01_01_000000_create_pages_table', 1),
(6, '2016_01_01_000000_create_posts_table', 1),
(7, '2016_02_15_204651_create_categories_table', 1),
(8, '2016_05_19_173453_create_menu_table', 1),
(9, '2016_06_01_000001_create_oauth_auth_codes_table', 1),
(10, '2016_06_01_000002_create_oauth_access_tokens_table', 1),
(11, '2016_06_01_000003_create_oauth_refresh_tokens_table', 1),
(12, '2016_06_01_000004_create_oauth_clients_table', 1),
(13, '2016_06_01_000005_create_oauth_personal_access_clients_table', 1),
(14, '2016_10_21_190000_create_roles_table', 1),
(15, '2016_10_21_190000_create_settings_table', 1),
(16, '2016_11_30_135954_create_permission_table', 1),
(17, '2016_11_30_141208_create_permission_role_table', 1),
(18, '2016_12_26_201236_data_types__add__server_side', 1),
(19, '2017_01_13_000000_add_route_to_menu_items_table', 1),
(20, '2017_01_14_005015_create_translations_table', 1),
(21, '2017_01_15_000000_make_table_name_nullable_in_permissions_table', 1),
(22, '2017_03_06_000000_add_controller_to_data_types_table', 1),
(23, '2017_04_11_000000_alter_post_nullable_fields_table', 1),
(24, '2017_04_21_000000_add_order_to_data_rows_table', 1),
(25, '2017_07_05_210000_add_policyname_to_data_types_table', 1),
(26, '2017_08_05_000000_add_group_to_settings_table', 1),
(27, '2017_11_26_013050_add_user_role_relationship', 1),
(28, '2017_11_26_015000_create_user_roles_table', 1),
(29, '2018_03_11_000000_add_user_settings', 1),
(30, '2018_03_14_000000_add_details_to_data_types_table', 1),
(31, '2018_03_16_000000_make_settings_value_nullable', 1),
(32, '2019_08_19_000000_create_failed_jobs_table', 1),
(33, '2021_03_02_122539_create_verificate_code_table', 1);

-- --------------------------------------------------------

--
-- Структура таблицы `oauth_access_tokens`
--

CREATE TABLE `oauth_access_tokens` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `client_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `scopes` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `oauth_access_tokens`
--

INSERT INTO `oauth_access_tokens` (`id`, `user_id`, `client_id`, `name`, `scopes`, `revoked`, `created_at`, `updated_at`, `expires_at`) VALUES
('0dbfd6e13e0ae846d113751d632c7322f4663b33d714df91f2d7c86357b54c4422914898cd91ac1b', 2, 1, 'zajhenko29@gmail.com', '[]', 0, '2021-03-31 05:17:34', '2021-03-31 05:17:34', '2022-03-31 08:17:34'),
('a4b8fc8c9dce9d8a9155f70c9ff8abec8a9c33d72083d9c5036a5a954d180cde16da94236022883b', 1, 1, 'admin@admin.com', '[]', 0, '2021-04-01 13:31:19', '2021-04-01 13:31:19', '2022-04-01 16:31:19'),
('adf39fefde82e50098d9ca82ea9e351398ed4630962fed3916af3b882848a3425b7c051a5f63e62a', 2, 1, 'zajhenko29@gmail.com', '[]', 0, '2021-04-01 07:18:56', '2021-04-01 07:18:56', '2022-04-01 10:18:56'),
('bc2cfeeb05e1b996bd85c2363a116e0f612a15002dce363dd77910234b3c8d1919664bf0a044ff0e', 2, 1, 'zajhenko29@gmail.com', '[]', 0, '2021-03-29 11:23:49', '2021-03-29 11:23:49', '2022-03-29 14:23:49'),
('df6828929670332fed84472944c85b279947faac0787a9d40611dd108397a032fdcecfde6ef98379', 2, 1, 'zajhenko29@gmail.com', '[]', 0, '2021-03-20 08:12:29', '2021-03-20 08:12:29', '2022-03-20 10:12:29'),
('e24ca539d99599e5e7c7f06759e40b542b54996840830a53d2c253d8e7567c7991b64d66486f5b0e', 2, 1, 'zajhenko29@gmail.com', '[]', 0, '2021-03-29 11:23:30', '2021-03-29 11:23:30', '2022-03-29 14:23:30'),
('ed7bef13770516cccb13a28ba8d92bcfd415a851a0175f6f2424e5769d071f39067a083c67f15219', 2, 1, 'zajhenko29@gmail.com', '[]', 0, '2021-03-30 08:44:57', '2021-03-30 08:44:57', '2022-03-30 11:44:57'),
('f1d45d6e0f4555fb503fda4153beeca096a22843d5191b046ae63dd10723d4c754b77318f754528f', 2, 1, 'zajhenko29@gmail.com', '[]', 0, '2021-04-01 11:23:05', '2021-04-01 11:23:05', '2022-04-01 14:23:05'),
('fe6cffc88756ff46f999a1650adc0379a8201971592f09afd5d803b9117177a16626da3880dfafae', 2, 1, 'zajhenko29@gmail.com', '[]', 0, '2021-03-20 08:12:04', '2021-03-20 08:12:04', '2022-03-20 10:12:04');

-- --------------------------------------------------------

--
-- Структура таблицы `oauth_auth_codes`
--

CREATE TABLE `oauth_auth_codes` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `client_id` bigint(20) UNSIGNED NOT NULL,
  `scopes` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `oauth_clients`
--

CREATE TABLE `oauth_clients` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `secret` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `provider` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `redirect` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `personal_access_client` tinyint(1) NOT NULL,
  `password_client` tinyint(1) NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `oauth_clients`
--

INSERT INTO `oauth_clients` (`id`, `user_id`, `name`, `secret`, `provider`, `redirect`, `personal_access_client`, `password_client`, `revoked`, `created_at`, `updated_at`) VALUES
(1, NULL, 'Сервис объявлений OLX: сайт объявлений в Украине - новые и бу товары на OLX.ua Personal Access Client', 'NDcujAxzFHvzmVbQkPQQWbEnvQ37nEX32ljlfjIp', NULL, 'http://localhost', 1, 0, 0, '2021-03-20 08:11:50', '2021-03-20 08:11:50'),
(2, NULL, 'Сервис объявлений OLX: сайт объявлений в Украине - новые и бу товары на OLX.ua Password Grant Client', '8i6OeMpaJRDtnOIhfgOtzitvQ5JClpcvwDMJDmo1', 'users', 'http://localhost', 0, 1, 0, '2021-03-20 08:11:50', '2021-03-20 08:11:50');

-- --------------------------------------------------------

--
-- Структура таблицы `oauth_personal_access_clients`
--

CREATE TABLE `oauth_personal_access_clients` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `client_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `oauth_personal_access_clients`
--

INSERT INTO `oauth_personal_access_clients` (`id`, `client_id`, `created_at`, `updated_at`) VALUES
(1, 1, '2021-03-20 08:11:50', '2021-03-20 08:11:50');

-- --------------------------------------------------------

--
-- Структура таблицы `oauth_refresh_tokens`
--

CREATE TABLE `oauth_refresh_tokens` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `access_token_id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `pages`
--

CREATE TABLE `pages` (
  `id` int(10) UNSIGNED NOT NULL,
  `author_id` int(11) NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `excerpt` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `body` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `meta_description` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `meta_keywords` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` enum('ACTIVE','INACTIVE') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'INACTIVE',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `pages`
--

INSERT INTO `pages` (`id`, `author_id`, `title`, `excerpt`, `body`, `image`, `slug`, `meta_description`, `meta_keywords`, `status`, `created_at`, `updated_at`) VALUES
(1, 0, 'Hello World', 'Hang the jib grog grog blossom grapple dance the hempen jig gangway pressgang bilge rat to go on account lugger. Nelsons folly gabion line draught scallywag fire ship gaff fluke fathom case shot. Sea Legs bilge rat sloop matey gabion long clothes run a shot across the bow Gold Road cog league.', '<p>Hello World. Scallywag grog swab Cat o\'nine tails scuttle rigging hardtack cable nipper Yellow Jack. Handsomely spirits knave lad killick landlubber or just lubber deadlights chantey pinnace crack Jennys tea cup. Provost long clothes black spot Yellow Jack bilged on her anchor league lateen sail case shot lee tackle.</p>\r\n<p>Ballast spirits fluke topmast me quarterdeck schooner landlubber or just lubber gabion belaying pin. Pinnace stern galleon starboard warp carouser to go on account dance the hempen jig jolly boat measured fer yer chains. Man-of-war fire in the hole nipperkin handsomely doubloon barkadeer Brethren of the Coast gibbet driver squiffy.</p>', 'pages/page1.jpg', 'hello-world', 'Yar Meta Description', 'Keyword1, Keyword2', 'ACTIVE', '2021-03-20 08:00:02', '2021-03-20 08:00:02');

-- --------------------------------------------------------

--
-- Структура таблицы `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `permissions`
--

CREATE TABLE `permissions` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `key` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `table_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `permissions`
--

INSERT INTO `permissions` (`id`, `key`, `table_name`, `created_at`, `updated_at`) VALUES
(1, 'browse_admin', NULL, '2021-03-20 07:59:56', '2021-03-20 07:59:56'),
(2, 'browse_bread', NULL, '2021-03-20 07:59:56', '2021-03-20 07:59:56'),
(3, 'browse_database', NULL, '2021-03-20 07:59:56', '2021-03-20 07:59:56'),
(4, 'browse_media', NULL, '2021-03-20 07:59:56', '2021-03-20 07:59:56'),
(5, 'browse_compass', NULL, '2021-03-20 07:59:56', '2021-03-20 07:59:56'),
(6, 'browse_menus', 'menus', '2021-03-20 07:59:56', '2021-03-20 07:59:56'),
(7, 'read_menus', 'menus', '2021-03-20 07:59:56', '2021-03-20 07:59:56'),
(8, 'edit_menus', 'menus', '2021-03-20 07:59:56', '2021-03-20 07:59:56'),
(9, 'add_menus', 'menus', '2021-03-20 07:59:56', '2021-03-20 07:59:56'),
(10, 'delete_menus', 'menus', '2021-03-20 07:59:56', '2021-03-20 07:59:56'),
(11, 'browse_roles', 'roles', '2021-03-20 07:59:56', '2021-03-20 07:59:56'),
(12, 'read_roles', 'roles', '2021-03-20 07:59:57', '2021-03-20 07:59:57'),
(13, 'edit_roles', 'roles', '2021-03-20 07:59:57', '2021-03-20 07:59:57'),
(14, 'add_roles', 'roles', '2021-03-20 07:59:57', '2021-03-20 07:59:57'),
(15, 'delete_roles', 'roles', '2021-03-20 07:59:57', '2021-03-20 07:59:57'),
(16, 'browse_users', 'users', '2021-03-20 07:59:57', '2021-03-20 07:59:57'),
(17, 'read_users', 'users', '2021-03-20 07:59:57', '2021-03-20 07:59:57'),
(18, 'edit_users', 'users', '2021-03-20 07:59:57', '2021-03-20 07:59:57'),
(19, 'add_users', 'users', '2021-03-20 07:59:57', '2021-03-20 07:59:57'),
(20, 'delete_users', 'users', '2021-03-20 07:59:57', '2021-03-20 07:59:57'),
(21, 'browse_settings', 'settings', '2021-03-20 07:59:57', '2021-03-20 07:59:57'),
(22, 'read_settings', 'settings', '2021-03-20 07:59:57', '2021-03-20 07:59:57'),
(23, 'edit_settings', 'settings', '2021-03-20 07:59:57', '2021-03-20 07:59:57'),
(24, 'add_settings', 'settings', '2021-03-20 07:59:57', '2021-03-20 07:59:57'),
(25, 'delete_settings', 'settings', '2021-03-20 07:59:57', '2021-03-20 07:59:57'),
(26, 'browse_categories', 'categories', '2021-03-20 07:59:59', '2021-03-20 07:59:59'),
(27, 'read_categories', 'categories', '2021-03-20 07:59:59', '2021-03-20 07:59:59'),
(28, 'edit_categories', 'categories', '2021-03-20 07:59:59', '2021-03-20 07:59:59'),
(29, 'add_categories', 'categories', '2021-03-20 07:59:59', '2021-03-20 07:59:59'),
(30, 'delete_categories', 'categories', '2021-03-20 07:59:59', '2021-03-20 07:59:59'),
(31, 'browse_posts', 'posts', '2021-03-20 08:00:00', '2021-03-20 08:00:00'),
(32, 'read_posts', 'posts', '2021-03-20 08:00:00', '2021-03-20 08:00:00'),
(33, 'edit_posts', 'posts', '2021-03-20 08:00:00', '2021-03-20 08:00:00'),
(34, 'add_posts', 'posts', '2021-03-20 08:00:00', '2021-03-20 08:00:00'),
(35, 'delete_posts', 'posts', '2021-03-20 08:00:00', '2021-03-20 08:00:00'),
(36, 'browse_pages', 'pages', '2021-03-20 08:00:02', '2021-03-20 08:00:02'),
(37, 'read_pages', 'pages', '2021-03-20 08:00:02', '2021-03-20 08:00:02'),
(38, 'edit_pages', 'pages', '2021-03-20 08:00:02', '2021-03-20 08:00:02'),
(39, 'add_pages', 'pages', '2021-03-20 08:00:02', '2021-03-20 08:00:02'),
(40, 'delete_pages', 'pages', '2021-03-20 08:00:02', '2021-03-20 08:00:02'),
(41, 'browse_hooks', NULL, '2021-03-20 08:00:04', '2021-03-20 08:00:04'),
(42, 'browse_entities', 'entities', '2021-03-26 12:37:58', '2021-03-26 12:37:58'),
(43, 'read_entities', 'entities', '2021-03-26 12:37:58', '2021-03-26 12:37:58'),
(44, 'edit_entities', 'entities', '2021-03-26 12:37:58', '2021-03-26 12:37:58'),
(45, 'add_entities', 'entities', '2021-03-26 12:37:58', '2021-03-26 12:37:58'),
(46, 'delete_entities', 'entities', '2021-03-26 12:37:58', '2021-03-26 12:37:58'),
(47, 'browse_images', 'images', '2021-03-28 10:07:29', '2021-03-28 10:07:29'),
(48, 'read_images', 'images', '2021-03-28 10:07:29', '2021-03-28 10:07:29'),
(49, 'edit_images', 'images', '2021-03-28 10:07:29', '2021-03-28 10:07:29'),
(50, 'add_images', 'images', '2021-03-28 10:07:29', '2021-03-28 10:07:29'),
(51, 'delete_images', 'images', '2021-03-28 10:07:29', '2021-03-28 10:07:29');

-- --------------------------------------------------------

--
-- Структура таблицы `permission_role`
--

CREATE TABLE `permission_role` (
  `permission_id` bigint(20) UNSIGNED NOT NULL,
  `role_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `permission_role`
--

INSERT INTO `permission_role` (`permission_id`, `role_id`) VALUES
(1, 1),
(2, 1),
(3, 1),
(4, 1),
(5, 1),
(6, 1),
(7, 1),
(8, 1),
(9, 1),
(10, 1),
(11, 1),
(12, 1),
(13, 1),
(14, 1),
(15, 1),
(16, 1),
(17, 1),
(18, 1),
(19, 1),
(20, 1),
(21, 1),
(22, 1),
(23, 1),
(24, 1),
(25, 1),
(26, 1),
(27, 1),
(28, 1),
(29, 1),
(30, 1),
(31, 1),
(32, 1),
(33, 1),
(34, 1),
(35, 1),
(36, 1),
(37, 1),
(38, 1),
(39, 1),
(40, 1),
(42, 1),
(43, 1),
(44, 1),
(45, 1),
(46, 1),
(47, 1),
(48, 1),
(49, 1),
(50, 1),
(51, 1);

-- --------------------------------------------------------

--
-- Структура таблицы `posts`
--

CREATE TABLE `posts` (
  `id` int(10) UNSIGNED NOT NULL,
  `author_id` int(11) NOT NULL,
  `category_id` int(11) DEFAULT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `seo_title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `excerpt` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `body` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `meta_description` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `meta_keywords` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` enum('PUBLISHED','DRAFT','PENDING') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'PENDING',
  `price` float NOT NULL,
  `featured` tinyint(1) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `posts`
--

INSERT INTO `posts` (`id`, `author_id`, `category_id`, `title`, `seo_title`, `excerpt`, `body`, `image`, `slug`, `meta_description`, `meta_keywords`, `status`, `price`, `featured`, `created_at`, `updated_at`) VALUES
(17, 2, 3, 'fhdgfkdfjgn fjg', NULL, NULL, 'fgd.g,hsnds,cj,.vnfgldksjvujdfkggfmbn fgjhgfd.skffghrfgurghfnbfdkg', '/storage/Images/Posts/CtjSlh7hs1nQtuJyBxCJAboaaEMpAGqHUJMKQ6Z7.jpg', 'fhdgfkdfjgn-fjg', NULL, NULL, 'PENDING', 124, 0, '2021-03-20 11:52:19', '2021-03-20 11:52:19');

-- --------------------------------------------------------

--
-- Структура таблицы `roles`
--

CREATE TABLE `roles` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `display_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `roles`
--

INSERT INTO `roles` (`id`, `name`, `display_name`, `created_at`, `updated_at`) VALUES
(1, 'admin', 'Администратор', '2021-03-20 07:59:56', '2021-03-20 07:59:56'),
(2, 'user', 'Обычный Пользователь', '2021-03-20 07:59:56', '2021-03-20 07:59:56');

-- --------------------------------------------------------

--
-- Структура таблицы `settings`
--

CREATE TABLE `settings` (
  `id` int(10) UNSIGNED NOT NULL,
  `key` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `display_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `value` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `details` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `order` int(11) NOT NULL DEFAULT 1,
  `group` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `settings`
--

INSERT INTO `settings` (`id`, `key`, `display_name`, `value`, `details`, `type`, `order`, `group`) VALUES
(1, 'site.title', 'Название Сайта', 'Название Сайта', '', 'text', 1, 'Site'),
(2, 'site.description', 'Описание Сайта', 'Описание Сайта', '', 'text', 2, 'Site'),
(3, 'site.logo', 'Логотип Сайта', '', '', 'image', 3, 'Site'),
(4, 'site.google_analytics_tracking_id', 'Google Analytics Tracking ID', '', '', 'text', 4, 'Site'),
(5, 'admin.bg_image', 'Фоновое Изображение для Админки', '', '', 'image', 5, 'Admin'),
(6, 'admin.title', 'Название Админки', 'Voyager', '', 'text', 1, 'Admin'),
(7, 'admin.description', 'Описание Админки', 'Добро пожаловать в Voyager. Пропавшую Админку для Laravel', '', 'text', 2, 'Admin'),
(8, 'admin.loader', 'Загрузчик Админки', '', '', 'image', 3, 'Admin'),
(9, 'admin.icon_image', 'Иконка Админки', '', '', 'image', 4, 'Admin'),
(10, 'admin.google_analytics_client_id', 'Google Analytics Client ID (используется для панели администратора)', '', '', 'text', 1, 'Admin');

-- --------------------------------------------------------

--
-- Структура таблицы `translations`
--

CREATE TABLE `translations` (
  `id` int(10) UNSIGNED NOT NULL,
  `table_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `column_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `foreign_key` int(10) UNSIGNED NOT NULL,
  `locale` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `value` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `translations`
--

INSERT INTO `translations` (`id`, `table_name`, `column_name`, `foreign_key`, `locale`, `value`, `created_at`, `updated_at`) VALUES
(1, 'data_types', 'display_name_singular', 5, 'pt', 'Post', '2021-03-20 08:00:02', '2021-03-20 08:00:02'),
(2, 'data_types', 'display_name_singular', 6, 'pt', 'Página', '2021-03-20 08:00:02', '2021-03-20 08:00:02'),
(3, 'data_types', 'display_name_singular', 1, 'pt', 'Utilizador', '2021-03-20 08:00:02', '2021-03-20 08:00:02'),
(4, 'data_types', 'display_name_singular', 4, 'pt', 'Categoria', '2021-03-20 08:00:02', '2021-03-20 08:00:02'),
(5, 'data_types', 'display_name_singular', 2, 'pt', 'Menu', '2021-03-20 08:00:02', '2021-03-20 08:00:02'),
(6, 'data_types', 'display_name_singular', 3, 'pt', 'Função', '2021-03-20 08:00:02', '2021-03-20 08:00:02'),
(7, 'data_types', 'display_name_plural', 5, 'pt', 'Posts', '2021-03-20 08:00:02', '2021-03-20 08:00:02'),
(8, 'data_types', 'display_name_plural', 6, 'pt', 'Páginas', '2021-03-20 08:00:02', '2021-03-20 08:00:02'),
(9, 'data_types', 'display_name_plural', 1, 'pt', 'Utilizadores', '2021-03-20 08:00:02', '2021-03-20 08:00:02'),
(10, 'data_types', 'display_name_plural', 4, 'pt', 'Categorias', '2021-03-20 08:00:02', '2021-03-20 08:00:02'),
(11, 'data_types', 'display_name_plural', 2, 'pt', 'Menus', '2021-03-20 08:00:02', '2021-03-20 08:00:02'),
(12, 'data_types', 'display_name_plural', 3, 'pt', 'Funções', '2021-03-20 08:00:02', '2021-03-20 08:00:02'),
(13, 'categories', 'slug', 1, 'pt', 'categoria-1', '2021-03-20 08:00:02', '2021-03-20 08:00:02'),
(14, 'categories', 'name', 1, 'pt', 'Categoria 1', '2021-03-20 08:00:02', '2021-03-20 08:00:02'),
(15, 'categories', 'slug', 2, 'pt', 'categoria-2', '2021-03-20 08:00:02', '2021-03-20 08:00:02'),
(16, 'categories', 'name', 2, 'pt', 'Categoria 2', '2021-03-20 08:00:03', '2021-03-20 08:00:03'),
(17, 'pages', 'title', 1, 'pt', 'Olá Mundo', '2021-03-20 08:00:03', '2021-03-20 08:00:03'),
(18, 'pages', 'slug', 1, 'pt', 'ola-mundo', '2021-03-20 08:00:03', '2021-03-20 08:00:03'),
(19, 'pages', 'body', 1, 'pt', '<p>Olá Mundo. Scallywag grog swab Cat o\'nine tails scuttle rigging hardtack cable nipper Yellow Jack. Handsomely spirits knave lad killick landlubber or just lubber deadlights chantey pinnace crack Jennys tea cup. Provost long clothes black spot Yellow Jack bilged on her anchor league lateen sail case shot lee tackle.</p>\r\n<p>Ballast spirits fluke topmast me quarterdeck schooner landlubber or just lubber gabion belaying pin. Pinnace stern galleon starboard warp carouser to go on account dance the hempen jig jolly boat measured fer yer chains. Man-of-war fire in the hole nipperkin handsomely doubloon barkadeer Brethren of the Coast gibbet driver squiffy.</p>', '2021-03-20 08:00:03', '2021-03-20 08:00:03'),
(20, 'menu_items', 'title', 1, 'pt', 'Painel de Controle', '2021-03-20 08:00:03', '2021-03-20 08:00:03'),
(21, 'menu_items', 'title', 2, 'pt', 'Media', '2021-03-20 08:00:03', '2021-03-20 08:00:03'),
(22, 'menu_items', 'title', 12, 'pt', 'Publicações', '2021-03-20 08:00:03', '2021-03-20 08:00:03'),
(23, 'menu_items', 'title', 3, 'pt', 'Utilizadores', '2021-03-20 08:00:03', '2021-03-20 08:00:03'),
(24, 'menu_items', 'title', 11, 'pt', 'Categorias', '2021-03-20 08:00:03', '2021-03-20 08:00:03'),
(25, 'menu_items', 'title', 13, 'pt', 'Páginas', '2021-03-20 08:00:03', '2021-03-20 08:00:03'),
(26, 'menu_items', 'title', 4, 'pt', 'Funções', '2021-03-20 08:00:03', '2021-03-20 08:00:03'),
(27, 'menu_items', 'title', 5, 'pt', 'Ferramentas', '2021-03-20 08:00:03', '2021-03-20 08:00:03'),
(28, 'menu_items', 'title', 6, 'pt', 'Menus', '2021-03-20 08:00:03', '2021-03-20 08:00:03'),
(29, 'menu_items', 'title', 7, 'pt', 'Base de dados', '2021-03-20 08:00:03', '2021-03-20 08:00:03'),
(30, 'menu_items', 'title', 10, 'pt', 'Configurações', '2021-03-20 08:00:03', '2021-03-20 08:00:03');

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `role_id` bigint(20) UNSIGNED DEFAULT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `city_id` int(11) UNSIGNED DEFAULT NULL,
  `tel` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `avatar` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT '/storage/users/default.png',
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `settings` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`id`, `role_id`, `name`, `city_id`, `tel`, `email`, `avatar`, `email_verified_at`, `password`, `remember_token`, `settings`, `created_at`, `updated_at`) VALUES
(1, 1, 'Admin', NULL, NULL, 'admin@admin.com', 'users/default.png', '2021-04-30 16:30:57', '$2y$10$JSkx0yI9cXDyN5FfVgYnYOpqVAOtv5inxUPjtFM1/lSR6EJTF/NxC', '6vvj7cPmdVFEPA8mpUSmPsOq1AQGHoK2csFyu9HyclOzFS7OOUgLx0fnRRyS', NULL, '2021-03-20 08:00:00', '2021-03-20 08:00:00'),
(2, 2, 'Юра', 1, '380730320103', 'zajhenko29@gmail.com', '/storage/users/default.png', '2021-03-20 08:09:52', '$2y$10$/UaECZlDUdY5BwRiIaVcaO.6R86n.7GYExPbBhrJjv9fs.rXqog6e', NULL, NULL, '2021-03-20 08:09:02', '2021-03-27 10:19:15'),
(3, 2, 'user', NULL, NULL, 'user@user.com', 'users/default.png', NULL, '$2y$10$bhCBoIIYlUM7s6GI7UEZvOy5Lv1Lu9b4TiL0NTRMHS2BnW.e6IVFS', NULL, NULL, '2021-04-01 06:58:12', '2021-04-01 06:58:12'),
(4, 2, 'user2', NULL, NULL, 'user2@user.com', '/storage/users/default.png', NULL, '$2y$10$v.Jeq7vhkQMNKxeV2iFXE.rYK42HpcEkTjdg2p8UaJuxsHmDMElja', NULL, NULL, '2021-04-01 06:59:49', '2021-04-01 06:59:49'),
(5, 2, 'user3', NULL, NULL, 'user3@user.com', '/storage/users/default.png', NULL, '$2y$10$lAuUPQJ3LvU0Aas46krKm.eRihrOhbscj707bduaoE8cYXnP5Id.W', NULL, NULL, '2021-04-01 07:00:54', '2021-04-01 07:00:54'),
(6, 2, 'user4', NULL, NULL, 'user4@user.com', '/storage/users/default.png', NULL, '$2y$10$cGUPs6Wub1QNCCW8wFxRW.29D7AiosgzCy9YdyeHqkUVBBxHucgKm', NULL, NULL, '2021-04-01 07:01:59', '2021-04-01 07:01:59');

-- --------------------------------------------------------

--
-- Структура таблицы `user_roles`
--

CREATE TABLE `user_roles` (
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `role_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `verificate_codes`
--

CREATE TABLE `verificate_codes` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` int(11) NOT NULL,
  `code` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` int(11) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `verificate_codes`
--

INSERT INTO `verificate_codes` (`id`, `user_id`, `code`, `status`, `created_at`, `updated_at`) VALUES
(1, 2, '683372', 0, '2021-04-01 06:42:09', '2021-04-01 06:42:09');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `categories_slug_unique` (`slug`);

--
-- Индексы таблицы `citys`
--
ALTER TABLE `citys`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `data_rows`
--
ALTER TABLE `data_rows`
  ADD PRIMARY KEY (`id`),
  ADD KEY `data_rows_data_type_id_foreign` (`data_type_id`);

--
-- Индексы таблицы `data_types`
--
ALTER TABLE `data_types`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `data_types_name_unique` (`name`),
  ADD UNIQUE KEY `data_types_slug_unique` (`slug`);

--
-- Индексы таблицы `entities`
--
ALTER TABLE `entities`
  ADD PRIMARY KEY (`id`),
  ADD KEY `author_id` (`author_id`) USING BTREE,
  ADD KEY `category_id` (`category_id`) USING BTREE;

--
-- Индексы таблицы `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Индексы таблицы `favorites`
--
ALTER TABLE `favorites`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`,`entity_id`);

--
-- Индексы таблицы `images`
--
ALTER TABLE `images`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `images_name_unique` (`name`),
  ADD KEY `post_id` (`post_id`);

--
-- Индексы таблицы `menus`
--
ALTER TABLE `menus`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `menus_name_unique` (`name`);

--
-- Индексы таблицы `menu_items`
--
ALTER TABLE `menu_items`
  ADD PRIMARY KEY (`id`),
  ADD KEY `menu_items_menu_id_foreign` (`menu_id`);

--
-- Индексы таблицы `messages`
--
ALTER TABLE `messages`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `oauth_access_tokens`
--
ALTER TABLE `oauth_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_access_tokens_user_id_index` (`user_id`);

--
-- Индексы таблицы `oauth_auth_codes`
--
ALTER TABLE `oauth_auth_codes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_auth_codes_user_id_index` (`user_id`);

--
-- Индексы таблицы `oauth_clients`
--
ALTER TABLE `oauth_clients`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_clients_user_id_index` (`user_id`);

--
-- Индексы таблицы `oauth_personal_access_clients`
--
ALTER TABLE `oauth_personal_access_clients`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `oauth_refresh_tokens`
--
ALTER TABLE `oauth_refresh_tokens`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_refresh_tokens_access_token_id_index` (`access_token_id`);

--
-- Индексы таблицы `pages`
--
ALTER TABLE `pages`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `pages_slug_unique` (`slug`);

--
-- Индексы таблицы `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Индексы таблицы `permissions`
--
ALTER TABLE `permissions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `permissions_key_index` (`key`);

--
-- Индексы таблицы `permission_role`
--
ALTER TABLE `permission_role`
  ADD PRIMARY KEY (`permission_id`,`role_id`),
  ADD KEY `permission_role_permission_id_index` (`permission_id`),
  ADD KEY `permission_role_role_id_index` (`role_id`);

--
-- Индексы таблицы `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `image` (`image`);

--
-- Индексы таблицы `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `roles_name_unique` (`name`);

--
-- Индексы таблицы `settings`
--
ALTER TABLE `settings`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `settings_key_unique` (`key`);

--
-- Индексы таблицы `translations`
--
ALTER TABLE `translations`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `translations_table_name_column_name_foreign_key_locale_unique` (`table_name`,`column_name`,`foreign_key`,`locale`);

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`),
  ADD KEY `users_role_id_foreign` (`role_id`);

--
-- Индексы таблицы `user_roles`
--
ALTER TABLE `user_roles`
  ADD PRIMARY KEY (`user_id`,`role_id`),
  ADD KEY `user_roles_user_id_index` (`user_id`),
  ADD KEY `user_roles_role_id_index` (`role_id`);

--
-- Индексы таблицы `verificate_codes`
--
ALTER TABLE `verificate_codes`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=138;

--
-- AUTO_INCREMENT для таблицы `citys`
--
ALTER TABLE `citys`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT для таблицы `data_rows`
--
ALTER TABLE `data_rows`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=77;

--
-- AUTO_INCREMENT для таблицы `data_types`
--
ALTER TABLE `data_types`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT для таблицы `entities`
--
ALTER TABLE `entities`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT для таблицы `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `favorites`
--
ALTER TABLE `favorites`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT для таблицы `images`
--
ALTER TABLE `images`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT для таблицы `menus`
--
ALTER TABLE `menus`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT для таблицы `menu_items`
--
ALTER TABLE `menu_items`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT для таблицы `messages`
--
ALTER TABLE `messages`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT для таблицы `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT для таблицы `oauth_clients`
--
ALTER TABLE `oauth_clients`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT для таблицы `oauth_personal_access_clients`
--
ALTER TABLE `oauth_personal_access_clients`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT для таблицы `pages`
--
ALTER TABLE `pages`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT для таблицы `permissions`
--
ALTER TABLE `permissions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=52;

--
-- AUTO_INCREMENT для таблицы `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT для таблицы `roles`
--
ALTER TABLE `roles`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT для таблицы `settings`
--
ALTER TABLE `settings`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT для таблицы `translations`
--
ALTER TABLE `translations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT для таблицы `verificate_codes`
--
ALTER TABLE `verificate_codes`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `data_rows`
--
ALTER TABLE `data_rows`
  ADD CONSTRAINT `data_rows_data_type_id_foreign` FOREIGN KEY (`data_type_id`) REFERENCES `data_types` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ограничения внешнего ключа таблицы `entities`
--
ALTER TABLE `entities`
  ADD CONSTRAINT `entities_ibfk_1` FOREIGN KEY (`author_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `entities_ibfk_2` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`);

--
-- Ограничения внешнего ключа таблицы `favorites`
--
ALTER TABLE `favorites`
  ADD CONSTRAINT `favorites_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `favorites_ibfk_2` FOREIGN KEY (`entity_id`) REFERENCES `entities` (`id`);

--
-- Ограничения внешнего ключа таблицы `images`
--
ALTER TABLE `images`
  ADD CONSTRAINT `images_ibfk_1` FOREIGN KEY (`post_id`) REFERENCES `entities` (`id`);

--
-- Ограничения внешнего ключа таблицы `menu_items`
--
ALTER TABLE `menu_items`
  ADD CONSTRAINT `menu_items_menu_id_foreign` FOREIGN KEY (`menu_id`) REFERENCES `menus` (`id`) ON DELETE CASCADE;

--
-- Ограничения внешнего ключа таблицы `messages`
--
ALTER TABLE `messages`
  ADD CONSTRAINT `messages_ibfk_1` FOREIGN KEY (`entity_id`) REFERENCES `entities` (`id`),
  ADD CONSTRAINT `messages_ibfk_2` FOREIGN KEY (`from_id`) REFERENCES `users` (`id`);

--
-- Ограничения внешнего ключа таблицы `permission_role`
--
ALTER TABLE `permission_role`
  ADD CONSTRAINT `permission_role_permission_id_foreign` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `permission_role_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE;

--
-- Ограничения внешнего ключа таблицы `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`);

--
-- Ограничения внешнего ключа таблицы `user_roles`
--
ALTER TABLE `user_roles`
  ADD CONSTRAINT `user_roles_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `user_roles_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
