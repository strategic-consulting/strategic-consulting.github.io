#!/usr/bin/env perl
use warnings;
use strict;
use v5.16;
use Cwd;
my $wd=cwd();

my $url = 'https://strategic-consulting.scot/';
my @ds= localtime;
my $m=$ds[4]+1;
if ($m<10) {$m='0'.$m}
my $d = $ds[3];
if ($d<10) {$d='0'.$d}
my $year = $ds[5]+1900;
my $date = $year.'-'.$m.'-'.$d;

chdir '../strategic-consulting.github.io';

print '<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd" xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
';
for my $dir ('',qw(services casestudies about book articles speaker contact)) {
my $ddir = ($dir ne '') ? $dir.'/' : $dir;
my $prio=0.5;
print '
  <url>
    <loc>'.$url.$ddir.'</loc>
    <lastmod>'.$date.'T14:42:00+00:00</lastmod>
    <changefreq>weekly</changefreq>
    <priority>'.$prio.'</priority>
  </url>
';
}

print '
</urlset>
';

chdir $wd;

